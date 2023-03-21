export default class AppController {
  constructor(appView) {
    this.appView = appView;

    // Display initial App
    this.onAppChanged();
  }

  /**
   * Render App
   */
  onAppChanged() {
    this.appView.displayApp();
  }
}
