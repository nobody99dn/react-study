export default class AppController {
  constructor(appView) {
    this.appView = appView;

    // NOTE: 1.2 Flow render App
    // Display initial App
    this.onAppChanged();
  }

  /**
   * Render App
   */
  onAppChanged() {
    // NOTE: 1.3 Flow render App
    this.appView.displayApp();
  }
}
