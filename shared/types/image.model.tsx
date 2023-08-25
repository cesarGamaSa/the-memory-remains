export interface Image {
    title: string;
    file: File;
}

interface File {
    url: string;
    fileName: string;
    contentType: string;
}
