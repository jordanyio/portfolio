import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { Search, Download, Folder, File, ChevronRight, ChevronDown, Upload, FolderPlus } from 'lucide-react';

import PDFView from './PDFView';

import './PDFViewer.css'

import { 
  setSelectedReportCategory, 
  setSelectedReport, 
  setSearchTerm, 
  setUploadModalOpen, 
  setAddCategoryModalOpen,
  fetchAllReports,
  fetchReportCategories,
  getReport,
  DEFAULT_CATEGORY,
  DEFAULT_REPORT
} from '../../redux/reportsSlice';

import UploadReportModal from './UploadReportModal';
import AddCategoryModal from './AddCategoryModal';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js`;

const PdfViewer = () => {
  const dispatch = useDispatch();
  const { 
    categories, 
    reports, 
    selectedCategoryId, 
    selectedReport, 
    currentPdfUrl, 
    searchTerm, 
    status 
  } = useSelector(state => state.reports);
  
  const [numPages, setNumPages] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [pdfError, setPdfError] = useState(null);
  const [selectedPage, setSelectedPage] = useState(1);
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchReportCategories());
    dispatch(fetchAllReports());
  }, [dispatch]);

  const reportsByFolder = useMemo(() => {
    const folders = {
      [DEFAULT_CATEGORY.categoryName]: {
        categories: categories.filter(c => !c.parentName || c.parentName === DEFAULT_CATEGORY.categoryName),
        reports: reports.filter(r => {
          if (r.blobId === DEFAULT_REPORT.blobId) return true;
          const category = categories.find(c => c.categoryId === r.categoryId);
          return !category?.parentName || category.parentName === DEFAULT_CATEGORY.categoryName;
        })
      }
    };

    categories.forEach(category => {
      if (category.parentName && category.parentName !== DEFAULT_CATEGORY.categoryName) {
        if (!folders[category.parentName]) {
          folders[category.parentName] = {
            categories: []
          };
        }
        folders[category.parentName].categories.push(category);
      }
    });

    reports.forEach(report => {
      const category = categories.find(c => c.categoryId === report.categoryId);
      if (category && category.parentName !== DEFAULT_CATEGORY.categoryName) {
        const folder = folders[category.parentName];
        if (folder) {
          if (!folder.reports) folder.reports = [];
          folder.reports.push(report);
        }
      }
    });

    return folders;
  }, [categories, reports]);

  const filteredFolders = useMemo(() => {
    if (!searchTerm) return reportsByFolder;

    return Object.entries(reportsByFolder).reduce((acc, [folderName, folder]) => {
      const filteredReports = folder.reports?.filter(report => 
        report.fileName.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (filteredReports?.length > 0) {
        acc[folderName] = {
          ...folder,
          reports: filteredReports
        };
      }
      return acc;
    }, {});
  }, [reportsByFolder, searchTerm]);

  const handleCategoryToggle = (folder) => {
    setExpandedCategories(prev => ({ ...prev, [folder]: !prev[folder] }));
  };

  const handleReportSelect = (report) => {
    setPdfError(null);
    setSelectedPage(1);
    dispatch(setSelectedReport(report));
    dispatch(getReport(report.blobId));
  };

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handlePdfLoadError = (error) => {
    console.error('Error loading PDF:', error);
    setPdfError('Failed to load PDF document. Please try again.');
  };

  const handlePageClick = (pageNumber) => {
    setSelectedPage(pageNumber);
    document.querySelector(`#page_${pageNumber}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* File Directory */}
      <div className="w-1/4 bg-gray-800 p-4 overflow-y-auto">
        <div className="mb-4">
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex-grow relative">
              <input 
                type="text" 
                placeholder="Search reports..."
                className="w-full bg-gray-700 rounded px-3 py-2 text-white placeholder-gray-400"
                value={searchTerm}
                onChange={handleSearch}
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsAddCategoryModalOpen(true)}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded flex items-center"
            >
              <FolderPlus className="mr-2" size={20} />
              New Folder
            </button>
            <button
              onClick={() => dispatch(setUploadModalOpen(true))}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center"
            >
              <Upload className="mr-2" size={20} />
              Upload
            </button>
          </div>
        </div>

        {categories && categories.length > 0 && (
          <div className="space-y-2">
            {Object.entries(filteredFolders).map(([folderName, folder]) => (
              <div key={folderName}>
                <div 
                  className="flex items-center p-2 rounded cursor-pointer hover:bg-gray-700"
                  onClick={() => handleCategoryToggle(folderName)}
                >
                  {expandedCategories[folderName] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  <Folder className="mr-2" size={20} />
                  <span>{folderName}</span>
                </div>
                {expandedCategories[folderName] && (
                  <div className="ml-6 space-y-1">
                    {folder.reports?.length > 0 ? (
                      folder.reports.map((report) => (
                        <div
                          key={report.reportId}
                          className={`flex items-center p-2 rounded cursor-pointer ${
                            selectedReport?.reportId === report.reportId ? 'bg-blue-600' : 'hover:bg-gray-700'
                          }`}
                          onClick={() => handleReportSelect(report)}
                        >
                          <File className="mr-2" size={16} />
                          <span>{report.fileName}</span>
                        </div>
                      ))
                    ) : (
                      <div className="text-gray-400 py-2 text-sm">
                        No reports in this category
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* PDF Viewer */}
      <div className="flex-1 bg-gray-800">
        {status === 'loading' && (
          <div className="flex items-center justify-center h-full">
            <div className="text-gray-400">Loading PDF...</div>
          </div>
        )}
        {(status === 'failed' || pdfError) && (
          <div className="flex items-center justify-center h-full">
            <div className="text-red-400">{pdfError || 'Error loading PDF'}</div>
          </div>
        )}
        {(!selectedReport || !currentPdfUrl) && status !== 'loading' && !pdfError && (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-gray-400">
              <File size={48} className="mx-auto mb-4 opacity-50" />
              <p>Select a report to view</p>
            </div>
          </div>
        )}
        {status === 'succeeded' && currentPdfUrl && selectedReport && !pdfError && (
          <Document
            file={currentPdfUrl}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            onLoadError={handlePdfLoadError}
            className="h-full flex"
          >
            <div className="flex-1 flex">
              {/* Main PDF View */}
              <div className="flex-1 overflow-y-auto scrollbar-hide"> {/* Hide scrollbar */}
                <div className="sticky top-0 z-10 bg-gray-800 px-4 py-2 border-b border-gray-700">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <h2 className="text-xl font-bold">
                        {selectedReport.fileName}
                      </h2>
                      {numPages && (
                        <span className="text-sm text-gray-400">
                          ({numPages} {numPages === 1 ? 'page' : 'pages'})
                        </span>
                      )}
                    </div>
                    <a
                      href={currentPdfUrl}
                      download={selectedReport.fileName}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center"
                    >
                      <Download className="mr-2" size={20} />
                      Download PDF
                    </a>
                  </div>
                </div>

                <PDFView 
                  pages={numPages}
                  onPageError={(error, pageNumber) => 
                    console.error(`Error loading page ${pageNumber}:`, error)
                  }
                />
              </div>

              {/* Thumbnails Sidebar */}
              <div className="w-48 border-l border-gray-700 overflow-y-auto scrollbar-hide bg-gray-800"> {/* Hide scrollbar and removed padding */}
                <div className="flex flex-col gap-2 p-2 mt-[52px]">
                  {Array.from(new Array(numPages), (el, index) => (
                    <div 
                      key={`thumb_${index + 1}`} 
                      className={`relative bg-white rounded cursor-pointer hover:ring-2 hover:ring-blue-500 ${
                        selectedPage === index + 1 ? 'ring-2 ring-blue-500' : ''
                      }`}
                      onClick={() => handlePageClick(index + 1)}
                    >
                      <Page 
                        pageNumber={index + 1}
                        width={180}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                      <div className="absolute bottom-1 right-1 bg-gray-800 text-white px-1 rounded text-xs">
                        {index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Document>
        )}
      </div>

      <UploadReportModal />
      <AddCategoryModal 
        isOpen={isAddCategoryModalOpen}
        onClose={() => setIsAddCategoryModalOpen(false)}
      />
    </div>
  );
};

export default PdfViewer;