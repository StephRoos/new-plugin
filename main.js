/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => MyPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  mySetting: "default"
};
var MyPlugin = class extends import_obsidian.Plugin {
  async onload() {
    await this.loadSettings();
    const ribbonIconEl = this.addRibbonIcon("dice", "My Plugin", (evt) => {
      new import_obsidian.Notice("This is a notice!");
    });
    ribbonIconEl.addClass("my-plugin-ribbon-class");
    const statusBarItemEl = this.addStatusBarItem();
    statusBarItemEl.setText("Status Bar Text");
    this.addCommand({
      id: "open-sample-modal-simple",
      name: "Open sample modal (simple)",
      callback: () => {
        new SampleModal(this.app).open();
      }
    });
    this.addCommand({
      id: "sample-editor-command",
      name: "Sample editor command",
      editorCallback: (editor, view) => {
        console.log(editor.getSelection());
        editor.replaceSelection("Sample Editor Command");
      }
    });
    this.addCommand({
      id: "open-sample-modal-complex",
      name: "Open sample modal (complex)",
      checkCallback: (checking) => {
        const markdownView = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
        if (markdownView) {
          if (!checking) {
            new SampleModal(this.app).open();
          }
          return true;
        }
      }
    });
    this.addSettingTab(new SampleSettingTab(this.app, this));
    this.registerDomEvent(document, "click", (evt) => {
      console.log("click", evt);
    });
    this.registerInterval(window.setInterval(() => console.log("setInterval"), 5 * 60 * 1e3));
  }
  onunload() {
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
var SampleModal = class extends import_obsidian.Modal {
  constructor(app) {
    super(app);
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.setText("Woah!");
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};
var SampleSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Settings for my awesome plugin." });
    new import_obsidian.Setting(containerEl).setName("Setting #1").setDesc("It's a secret").addText((text) => text.setPlaceholder("Enter your secret").setValue(this.plugin.settings.mySetting).onChange(async (value) => {
      console.log("Secret: " + value);
      this.plugin.settings.mySetting = value;
      await this.plugin.saveSettings();
    }));
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQXBwLCBFZGl0b3IsIE1hcmtkb3duVmlldywgTW9kYWwsIE5vdGljZSwgUGx1Z2luLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nIH0gZnJvbSAnb2JzaWRpYW4nO1xuXG4vLyBSZW1lbWJlciB0byByZW5hbWUgdGhlc2UgY2xhc3NlcyBhbmQgaW50ZXJmYWNlcyFcblxuaW50ZXJmYWNlIE15UGx1Z2luU2V0dGluZ3Mge1xuICAgIG15U2V0dGluZzogc3RyaW5nO1xufVxuXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBNeVBsdWdpblNldHRpbmdzID0ge1xuICAgIG15U2V0dGluZzogJ2RlZmF1bHQnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15UGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcbiAgICBzZXR0aW5nczogTXlQbHVnaW5TZXR0aW5ncztcblxuICAgIGFzeW5jIG9ubG9hZCgpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkU2V0dGluZ3MoKTtcblxuICAgICAgICAvLyBUaGlzIGNyZWF0ZXMgYW4gaWNvbiBpbiB0aGUgbGVmdCByaWJib24uXG4gICAgICAgIGNvbnN0IHJpYmJvbkljb25FbCA9IHRoaXMuYWRkUmliYm9uSWNvbignZGljZScsICdTYW1wbGUgUGx1Z2luJywgKGV2dDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gQ2FsbGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIHRoZSBpY29uLlxuICAgICAgICAgICAgbmV3IE5vdGljZSgnVGhpcyBpcyBhIG5vdGljZSEnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFBlcmZvcm0gYWRkaXRpb25hbCB0aGluZ3Mgd2l0aCB0aGUgcmliYm9uXG4gICAgICAgIHJpYmJvbkljb25FbC5hZGRDbGFzcygnbXktcGx1Z2luLXJpYmJvbi1jbGFzcycpO1xuXG4gICAgICAgIC8vIFRoaXMgYWRkcyBhIHN0YXR1cyBiYXIgaXRlbSB0byB0aGUgYm90dG9tIG9mIHRoZSBhcHAuIERvZXMgbm90IHdvcmsgb24gbW9iaWxlIGFwcHMuXG4gICAgICAgIGNvbnN0IHN0YXR1c0Jhckl0ZW1FbCA9IHRoaXMuYWRkU3RhdHVzQmFySXRlbSgpO1xuICAgICAgICBzdGF0dXNCYXJJdGVtRWwuc2V0VGV4dCgnU3RhdHVzIEJhciBUZXh0Jyk7XG5cbiAgICAgICAgLy8gVGhpcyBhZGRzIGEgc2ltcGxlIGNvbW1hbmQgdGhhdCBjYW4gYmUgdHJpZ2dlcmVkIGFueXdoZXJlXG4gICAgICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICAgICAgICBpZDogJ29wZW4tc2FtcGxlLW1vZGFsLXNpbXBsZScsXG4gICAgICAgICAgICBuYW1lOiAnT3BlbiBzYW1wbGUgbW9kYWwgKHNpbXBsZSknLFxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBuZXcgU2FtcGxlTW9kYWwodGhpcy5hcHApLm9wZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoaXMgYWRkcyBhbiBlZGl0b3IgY29tbWFuZCB0aGF0IGNhbiBwZXJmb3JtIHNvbWUgb3BlcmF0aW9uIG9uIHRoZSBjdXJyZW50IGVkaXRvciBpbnN0YW5jZVxuICAgICAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgICAgICAgaWQ6ICdzYW1wbGUtZWRpdG9yLWNvbW1hbmQnLFxuICAgICAgICAgICAgbmFtZTogJ1NhbXBsZSBlZGl0b3IgY29tbWFuZCcsXG4gICAgICAgICAgICBlZGl0b3JDYWxsYmFjazogKGVkaXRvcjogRWRpdG9yLCB2aWV3OiBNYXJrZG93blZpZXcpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlZGl0b3IuZ2V0U2VsZWN0aW9uKCkpO1xuICAgICAgICAgICAgICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKCdTYW1wbGUgRWRpdG9yIENvbW1hbmQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoaXMgYWRkcyBhIGNvbXBsZXggY29tbWFuZCB0aGF0IGNhbiBjaGVjayB3aGV0aGVyIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBhcHAgYWxsb3dzIGV4ZWN1dGlvbiBvZiB0aGUgY29tbWFuZFxuICAgICAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgICAgICAgaWQ6ICdvcGVuLXNhbXBsZS1tb2RhbC1jb21wbGV4JyxcbiAgICAgICAgICAgIG5hbWU6ICdPcGVuIHNhbXBsZSBtb2RhbCAoY29tcGxleCknLFxuICAgICAgICAgICAgY2hlY2tDYWxsYmFjazogKGNoZWNraW5nOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQ29uZGl0aW9ucyB0byBjaGVja1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtkb3duVmlldyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk7XG4gICAgICAgICAgICAgICAgaWYgKG1hcmtkb3duVmlldykge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBjaGVja2luZyBpcyB0cnVlLCB3ZSdyZSBzaW1wbHkgXCJjaGVja2luZ1wiIGlmIHRoZSBjb21tYW5kIGNhbiBiZSBydW4uXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGNoZWNraW5nIGlzIGZhbHNlLCB0aGVuIHdlIHdhbnQgdG8gYWN0dWFsbHkgcGVyZm9ybSB0aGUgb3BlcmF0aW9uLlxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNoZWNraW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgU2FtcGxlTW9kYWwodGhpcy5hcHApLm9wZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgY29tbWFuZCB3aWxsIG9ubHkgc2hvdyB1cCBpbiBDb21tYW5kIFBhbGV0dGUgd2hlbiB0aGUgY2hlY2sgZnVuY3Rpb24gcmV0dXJucyB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVGhpcyBhZGRzIGEgc2V0dGluZ3MgdGFiIHNvIHRoZSB1c2VyIGNhbiBjb25maWd1cmUgdmFyaW91cyBhc3BlY3RzIG9mIHRoZSBwbHVnaW5cbiAgICAgICAgdGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBTYW1wbGVTZXR0aW5nVGFiKHRoaXMuYXBwLCB0aGlzKSk7XG5cbiAgICAgICAgLy8gSWYgdGhlIHBsdWdpbiBob29rcyB1cCBhbnkgZ2xvYmFsIERPTSBldmVudHMgKG9uIHBhcnRzIG9mIHRoZSBhcHAgdGhhdCBkb2Vzbid0IGJlbG9uZyB0byB0aGlzIHBsdWdpbilcbiAgICAgICAgLy8gVXNpbmcgdGhpcyBmdW5jdGlvbiB3aWxsIGF1dG9tYXRpY2FsbHkgcmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lciB3aGVuIHRoaXMgcGx1Z2luIGlzIGRpc2FibGVkLlxuICAgICAgICB0aGlzLnJlZ2lzdGVyRG9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycsIChldnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGljaycsIGV2dCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFdoZW4gcmVnaXN0ZXJpbmcgaW50ZXJ2YWxzLCB0aGlzIGZ1bmN0aW9uIHdpbGwgYXV0b21hdGljYWxseSBjbGVhciB0aGUgaW50ZXJ2YWwgd2hlbiB0aGUgcGx1Z2luIGlzIGRpc2FibGVkLlxuICAgICAgICB0aGlzLnJlZ2lzdGVySW50ZXJ2YWwod2luZG93LnNldEludGVydmFsKCgpID0+IGNvbnNvbGUubG9nKCdzZXRJbnRlcnZhbCcpLCA1ICogNjAgKiAxMDAwKSk7XG4gICAgfVxuXG4gICAgb251bmxvYWQoKSB7XG5cbiAgICB9XG5cbiAgICBhc3luYyBsb2FkU2V0dGluZ3MoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX1NFVFRJTkdTLCBhd2FpdCB0aGlzLmxvYWREYXRhKCkpO1xuICAgIH1cblxuICAgIGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcbiAgICB9XG59XG5cbmNsYXNzIFNhbXBsZU1vZGFsIGV4dGVuZHMgTW9kYWwge1xuICAgIGNvbnN0cnVjdG9yKGFwcDogQXBwKSB7XG4gICAgICAgIHN1cGVyKGFwcCk7XG4gICAgfVxuXG4gICAgb25PcGVuKCkge1xuICAgICAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpcztcbiAgICAgICAgY29udGVudEVsLnNldFRleHQoJ1dvYWghJyk7XG4gICAgfVxuXG4gICAgb25DbG9zZSgpIHtcbiAgICAgICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXM7XG4gICAgICAgIGNvbnRlbnRFbC5lbXB0eSgpO1xuICAgIH1cbn1cblxuY2xhc3MgU2FtcGxlU2V0dGluZ1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xuICAgIHBsdWdpbjogTXlQbHVnaW47XG5cbiAgICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBNeVBsdWdpbikge1xuICAgICAgICBzdXBlcihhcHAsIHBsdWdpbik7XG4gICAgICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgIH1cblxuICAgIGRpc3BsYXkoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XG5cbiAgICAgICAgY29udGFpbmVyRWwuZW1wdHkoKTtcblxuICAgICAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDInLCB7IHRleHQ6ICdTZXR0aW5ncyBmb3IgbXkgYXdlc29tZSBwbHVnaW4uJyB9KTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKCdTZXR0aW5nICMxJylcbiAgICAgICAgICAgIC5zZXREZXNjKCdJdFxcJ3MgYSBzZWNyZXQnKVxuICAgICAgICAgICAgLmFkZFRleHQodGV4dCA9PiB0ZXh0XG4gICAgICAgICAgICAgICAgLnNldFBsYWNlaG9sZGVyKCdFbnRlciB5b3VyIHNlY3JldCcpXG4gICAgICAgICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLm15U2V0dGluZylcbiAgICAgICAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWNyZXQ6ICcgKyB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLm15U2V0dGluZyA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgfVxufSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBNEY7QUFRNUYsSUFBTSxtQkFBcUM7QUFBQSxFQUN2QyxXQUFXO0FBQ2Y7QUFFQSxJQUFxQixXQUFyQixjQUFzQyx1QkFBTztBQUFBLEVBR3pDLE1BQU0sU0FBUztBQUNYLFVBQU0sS0FBSyxhQUFhO0FBR3hCLFVBQU0sZUFBZSxLQUFLLGNBQWMsUUFBUSxpQkFBaUIsQ0FBQyxRQUFvQjtBQUVsRixVQUFJLHVCQUFPLG1CQUFtQjtBQUFBLElBQ2xDLENBQUM7QUFFRCxpQkFBYSxTQUFTLHdCQUF3QjtBQUc5QyxVQUFNLGtCQUFrQixLQUFLLGlCQUFpQjtBQUM5QyxvQkFBZ0IsUUFBUSxpQkFBaUI7QUFHekMsU0FBSyxXQUFXO0FBQUEsTUFDWixJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixVQUFVLE1BQU07QUFDWixZQUFJLFlBQVksS0FBSyxHQUFHLEVBQUUs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
