const vscode = require("vscode");
const { args } = require("./snippet-codes");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log(
    'Congratulations, your extension "qalan-content-snippets" is now active!'
  );

  const complexDescriptionComplexSolutiondis = vscode.commands.registerCommand(
    "qalan-content-snippets.complex_description_complex_solution",
    async function () {
      const inputCount = await vscode.window.showInputBox({
        prompt: "Enter the number of parameters for the function",
      });

      if (!inputCount) return;

      const count = parseInt(inputCount);

      const TaskModuleInput = await vscode.window.showInputBox({
        prompt: "Enter the name of the TaskModule",
      });

      const TaskModule = TaskModuleInput ? TaskModuleInput : "TaskModule";

      const editor = vscode.window.activeTextEditor;

      if (!editor) {
        vscode.window.showErrorMessage("No active text editor found.");
        return;
      }

      const position = editor.selection.active;

      editor.edit((editBuilder) => {
        const [enforce_keys, functionArgs, newGenerate] =
          args(count);

        editBuilder.insert(
          position,
          `
defmodule ${TaskModule} do
  alias Helpers.Translation

  @moduledoc false
  @enforce_keys [${enforce_keys.join(", ")}]
  defstruct @enforce_keys

  def description(%${TaskModule}{${functionArgs.join(", ")}}) do
    ComplexTaskDescription.new(
      [
        Translation.new(
          kaz: "",
          rus: "",
          eng: ""
        )
      ]
    )
  end

  def answer(%${TaskModule}{${functionArgs.join(", ")}}) do
  end

  def solution(%${TaskModule}{${functionArgs.join(", ")}} = task) do
    answer = answer(task)

    ComplexTaskSolution.new(
      answer,
      [
        Translation.new(
          kaz: "",
          rus: "",
          eng: ""
        )
      ]
    )
  end

  def new() do
    %${TaskModule}{
      ${newGenerate.join(",\n")}
    }
  end
end
`.trim()
        );
      });
    }
  );

  const textDescriptionTextSolutiondis = vscode.commands.registerCommand(
    "qalan-content-snippets.text_description_text_solution",
    async function () {
      const inputCount = await vscode.window.showInputBox({
        prompt: "Enter the number of parameters for the function",
      });

      if (!inputCount) return;

      const count = parseInt(inputCount);

      const TaskModuleInput = await vscode.window.showInputBox({
        prompt: "Enter the name of the TaskModule",
      });

      const TaskModule = TaskModuleInput ? TaskModuleInput : "TaskModule";

      const editor = vscode.window.activeTextEditor;

      if (!editor) {
        vscode.window.showErrorMessage("No active text editor found.");
        return;
      }

      const position = editor.selection.active;

      editor.edit((editBuilder) => {
        const [enforce_keys, functionArgs, newGenerate] =
          args(count);

        editBuilder.insert(
          position,
          `
defmodule ${TaskModule} do
  alias Helpers.Translation

  @moduledoc false
  @enforce_keys [${enforce_keys.join(", ")}]
  defstruct @enforce_keys

  def description(%${TaskModule}{${functionArgs.join(", ")}}) do
    TextTaskDescription.new(
        Translation.new(
          kaz: "",
          rus: "",
          eng: ""
        )
    )
  end

  def answer(%${TaskModule}{${functionArgs.join(", ")}}) do
  end

  def solution(%${TaskModule}{${functionArgs.join(", ")}} = task) do
    answer = answer(task)

    TextTaskSolution.new(
      answer,
      Translation.new(
        kaz: "",
        rus: "",
        eng: ""
      )
    )
  end

  def new() do
    %${TaskModule}{
      ${newGenerate.join(",\n")}
    }
  end
end
`.trim()
        );
      });
    }
  );

  const textDescriptionComplexSolutiondis = vscode.commands.registerCommand(
    "qalan-content-snippets.text_description_complex_solution",
    async function () {
      const inputCount = await vscode.window.showInputBox({
        prompt: "Enter the number of parameters for the function",
      });

      if (!inputCount) return;

      const count = parseInt(inputCount);

      const TaskModuleInput = await vscode.window.showInputBox({
        prompt: "Enter the name of the TaskModule",
      });

      const TaskModule = TaskModuleInput ? TaskModuleInput : "TaskModule";

      const editor = vscode.window.activeTextEditor;

      if (!editor) {
        vscode.window.showErrorMessage("No active text editor found.");
        return;
      }

      const position = editor.selection.active;

      editor.edit((editBuilder) => {
        const [enforce_keys, functionArgs, newGenerate] =
          args(count);

        editBuilder.insert(
          position,
          `
defmodule ${TaskModule} do
  alias Helpers.Translation

  @moduledoc false
  @enforce_keys [${enforce_keys.join(", ")}]
  defstruct @enforce_keys

  def description(%${TaskModule}{${functionArgs.join(", ")}}) do
    TextTaskDescription.new(
        Translation.new(
          kaz: "",
          rus: "",
          eng: ""
        )
    )
  end

  def answer(%${TaskModule}{${functionArgs.join(", ")}}) do
  end

  def solution(%${TaskModule}{${functionArgs.join(", ")}} = task) do
    answer = answer(task)

    ComplexTaskSolution.new(
      answer,
      [
        Translation.new(
          kaz: "",
          rus: "",
          eng: ""
        )
      ]
    )
  end

  def new() do
    %${TaskModule}{
      ${newGenerate.join(",\n")}
    }
  end
end
`.trim()
        );
      });
    }
  );

  const complexDescriptionTextSolutiondis = vscode.commands.registerCommand(
    "qalan-content-snippets.text_description_complex_solution",
    async function () {
      const inputCount = await vscode.window.showInputBox({
        prompt: "Enter the number of parameters for the function",
      });

      if (!inputCount) return;

      const count = parseInt(inputCount);

      const TaskModuleInput = await vscode.window.showInputBox({
        prompt: "Enter the name of the TaskModule",
      });

      const TaskModule = TaskModuleInput ? TaskModuleInput : "TaskModule";

      const editor = vscode.window.activeTextEditor;

      if (!editor) {
        vscode.window.showErrorMessage("No active text editor found.");
        return;
      }

      const position = editor.selection.active;

      editor.edit((editBuilder) => {
        const [enforce_keys, functionArgs, newGenerate] =
          args(count);

        editBuilder.insert(
          position,
          `
defmodule ${TaskModule} do
  alias Helpers.Translation

  @moduledoc false
  @enforce_keys [${enforce_keys.join(", ")}]
  defstruct @enforce_keys

  def description(%${TaskModule}{${functionArgs.join(", ")}}) do
    ComplexTaskDescription.new(
        [
          Translation.new(
            kaz: "",
            rus: "",
            eng: ""
          )
        ]
    )
  end

  def answer(%${TaskModule}{${functionArgs.join(", ")}}) do
  end

  def solution(%${TaskModule}{${functionArgs.join(", ")}} = task) do
    answer = answer(task)

    TextTaskSolution.new(
      answer,
      Translation.new(
        kaz: "",
        rus: "",
        eng: ""
      )
    )
  end

  def new() do
    %${TaskModule}{
      ${newGenerate.join(",\n")}
    }
  end
end
`.trim()
        );
      });
    }
  );

  context.subscriptions.push(complexDescriptionComplexSolutiondis, textDescriptionTextSolutiondis, textDescriptionComplexSolutiondis, complexDescriptionComplexSolutiondis);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
