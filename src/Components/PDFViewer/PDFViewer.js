// src/Components/PDFViewer/PDFViewer.js
import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf';

// Set the path to the PDF worker script
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PDFViewer = () => {
    const [pdfUrl, setPdfUrl] = useState('');

    // Define the path to your PDF
    const pdfPath = '/public/FeynCheck%20poster.pdf';

    const loadPDF = () => {
        setPdfUrl(pdfPath);
    };

    return (
        <div>
            <button onClick={loadPDF}>View PDF Document</button>
            {pdfUrl && (
                <div style={{ height: '100vh' }}>
                    <Worker workerUrl={pdfjs.GlobalWorkerOptions.workerSrc}>
                        <Viewer fileUrl={pdfUrl} />
                    </Worker>
                </div>
            )}
        </div>
    );
};

export default PDFViewer;
