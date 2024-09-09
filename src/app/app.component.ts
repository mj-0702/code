import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'decision-tree-app';

  decisionTree = {
    "root": {
      "question": "Do you want a doughnut?",
      "yes": {
        "question": "Do you deserve it?",
        "yes": {
          "question": "Are you sure?",
          "yes": {
            "result": "Get it!"
          },
          "no": {
            "result": "Do jumping jacks first."
          }
        },
        "no": {
          "result": "Maybe you want an apple?"
        }
      },
      "no": {
        "question": "Is it a good doughnut?",
        "yes": {
          "result": "What are you waiting for? Grab it now."
        },
        "no": {
          "result": "Wait 'til you find a sinful, unforgettable doughnut."
        }
      }
    }
  };

  currentNode: any;
  path: string[] = [];

  constructor()
  {
    this.currentNode = this.decisionTree.root;
  }

  handleAnswer(answer: 'yes' | 'no')
  {
    if (this.currentNode[answer])
    {
      this.path.push(answer);
      this.currentNode = this.currentNode[answer];
    }
  }

  resetTree()
  {
    this.currentNode = this.decisionTree.root;
    this.path = [];
  }
}
