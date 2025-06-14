import  fs, { readFile }  from 'fs';

class FileUtility {
    public static  fileData: any;
 
    static readFile(filePath: string): Promise<any> {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf-8', (err, data) => {
                if (err) {
                    reject(new Error('Error reading file'));
                } else {
                    this.fileData = JSON.parse(data);
                    resolve(this.fileData);
                  
                }
            });
        });
    }

      


}
export default FileUtility;