export class DragAndDropHandler {
    private dropzone: HTMLElement;
    // call back when json file is dropped
    private onJsonDropped: (json: any) => void = () => { };

    constructor(dropzoneId: string, onJsonDropped: (json: any) => void) {
        this.dropzone = document.getElementById(dropzoneId)!;
        this.onJsonDropped = onJsonDropped;
        this.setupDragAndDropEvents();
    }

    // handle when user drags over the dropzone area
    private setupDragAndDropEvents(): void {
        // prevent default drag behaviors
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            this.dropzone.addEventListener(eventName, this.preventDefaults, false);
        });

        // highlight drop area when item is dragged over it
        ['dragenter', 'dragover'].forEach(eventName => {
            this.dropzone.addEventListener(eventName, this.highlight, false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            this.dropzone.addEventListener(eventName, this.unhighlight, false);
        });

        // handle dropped files
        this.dropzone.addEventListener('drop', this.handleDrop, false);
    }

    private preventDefaults(e: Event): void {
        e.preventDefault();
        e.stopPropagation();
    }

    private highlight = (e: Event) => {
        this.dropzone.style.backgroundColor = '#404042';
    }

    private unhighlight = (e: Event) => {
        this.dropzone.style.backgroundColor = '#353538';
    }

    // returns json file contents or null if no file is selected
    private handleDrop = (e: DragEvent) => {
        let data = e.dataTransfer!;
        let files = data.files;

        // Only take the first file
        if (files.length > 0) {
            if (files[0].name.endsWith('.json') || files[0].name.endsWith('.JSON')) {
                return this.uploadFile(files[0]);
            }
        }
        return null;
    }

    private uploadFile = (file: File) => {
        let reader = new FileReader();

        reader.onloadend = () => {
            let json = JSON.parse(reader.result as string);
            // call the callback with the parsed json
            //TODO: check if contents of the file match expected then save to local storage
            this.onJsonDropped(json);
        }

        reader.readAsText(file);
    }
}