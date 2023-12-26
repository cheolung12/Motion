import { Component } from './components/component.js';
import { ImageComponent } from './components/pages/item/image.js';
import { NoteComponent } from './components/pages/item/note.js';
import { VideoComponent } from './components/pages/item/video.js';
import { Composable, PageComponent } from './components/pages/page.js';

class App {
    private readonly page: Component & Composable;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
        this.page.addChild(image);

        const note = new NoteComponent('Note Title', 'Note Body');
        this.page.addChild(note);

        const video = new VideoComponent('Video Title', 'https://youtu.be/UMYlSnLlCE0');
        this.page.addChild(video);
    }
}

new App(document.querySelector('.document')! as HTMLElement);