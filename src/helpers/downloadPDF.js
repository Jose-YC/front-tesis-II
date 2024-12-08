import html2canvas from 'html2canvas';
import { pdf } from '@react-pdf/renderer';

export const downloadPDF = async ({ chartRef, PDFComponent, fileName, props = {} }) => {
  try {
    let chartImage;

    if (chartRef && chartRef.current) {
      const canvas = await html2canvas(chartRef.current);
      chartImage = canvas.toDataURL('image/png');
    }
    const blob = await pdf(PDFComponent({ ...props, chartImage })).toBlob();
    
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    throw error; // Rethrow the error for the caller to handle if needed
  }
};

