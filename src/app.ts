class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  constructor() {
    const templateEl = document.getElementById(
      "project-input"
    ) as HTMLTemplateElement;
    this.templateElement = templateEl;
    this.hostElement = document.getElementById("app") as HTMLDivElement;
    const importedNode = document.importNode(this.templateElement.content);
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.attach();
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}
