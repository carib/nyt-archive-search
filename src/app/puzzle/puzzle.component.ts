import { Component, OnInit } from '@angular/core';
import { Puzzle } from '../puzzle';
import { PuzzleService } from '../puzzle.service';

@Component({
  selector: 'app-puzzle',
  template: `
    <div>
      {{ puzzle }}
    </div>
  `,
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {
  puzzle: Puzzle;

  constructor(private puzzleService: PuzzleService) {
    this.puzzle = puzzleService.getPuzzle();
  }

  ngOnInit() {
  }

}
