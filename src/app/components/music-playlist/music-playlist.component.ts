import { Component } from '@angular/core';

@Component({
  selector: 'app-music-playlist',
  templateUrl: './music-playlist.component.html',
  styleUrls: ['./music-playlist.component.css'],
})
export class MusicPlaylistComponent {
  songs: { title: string; artist: string }[] = [
    { title: 'Blinding Lights', artist: 'The Weeknd' },
    { title: 'Shape of You', artist: 'Ed Sheeran' },
    { title: 'Levitating', artist: 'Dua Lipa' },
    { title: 'Bad Guy', artist: 'Billie Eilish' },
  ];

  newSong: { title: string; artist: string } = { title: '', artist: '' };

  addSong() {
    if (this.newSong.title && this.newSong.artist) {
      this.songs.push({ ...this.newSong });
      this.newSong = { title: '', artist: '' }; // Clear the input fields
    }
  }

  removeSong(index: number) {
    this.songs.splice(index, 1);
  }
}
