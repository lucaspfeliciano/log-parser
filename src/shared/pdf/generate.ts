import PuppeteerHTMLPDF from "puppeteer-html-pdf";

import Log from "@shared/types/Log";
import { compileTemplate } from "./compileTemplate";
import AppError from "@api/errors/AppError";
import logger from "@shared/logger";

export const generatePdf = async (log: Log) => {
    const htmlPDF = new PuppeteerHTMLPDF();
    htmlPDF.setOptions({ format: 'A4' }); 

    try {
        const content = await compileTemplate(log);

        const pdfBuffer = await htmlPDF.create(content); 

        return pdfBuffer
    } catch (error) {

        logger.error(JSON.stringify(error))
        throw new AppError('Generate pdf error')
    }
}