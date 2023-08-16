class ProjectList {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLDivElement;
  constructor(private type: "active" | "finished") {
    const templateEl = document.getElementById(
      "project-list"
    ) as HTMLTemplateElement;
    this.templateElement = templateEl;
    this.hostElement = document.getElementById("app") as HTMLDivElement;
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLDivElement;
    this.element.id = `${this.type}-projects`;
  }
}
