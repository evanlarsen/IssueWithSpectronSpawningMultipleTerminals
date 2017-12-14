const path = require('path');
const Application = require('spectron').Application;
const assert = require('assert');

describe('application launch', function () {
    this.timeout(10000);
  
    beforeEach(function () {
      this.app = new Application({
        path: path.join(__dirname, 'node_modules', '.bin', 'electron.cmd'),
        args: [__dirname]
      })
      return this.app.start()
    })
  
    afterEach(function () {
      if (this.app && this.app.isRunning()) {
        return this.app.stop()
      }
    })
  
    it('shows an initial window', function () {
      return this.app.client.getWindowCount().then(function (count) {
        assert.equal(count, 1)
      })
    })
})