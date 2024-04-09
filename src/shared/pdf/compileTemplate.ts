import { compile } from 'handlebars';
import { readFileSync } from 'fs';
import { join } from 'path';

import Log from '@shared/types/Log';

export const compileTemplate = async (data: Log) => {
    const filePath = join(process.cwd(), 'src', 'shared', 'templates', 'feed.hbs');
  
    const html = readFileSync(filePath, 'utf8');
  
    return compile(html)({data: JSON.stringify(data)});
  };
