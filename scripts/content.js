const copyInstallCommandButton = document.querySelector('[aria-label="Copy install command line"]');

const commonParentBetweenCodeAndButton = copyInstallCommandButton.closest("p");
const mainParent = commonParentBetweenCodeAndButton?.parentElement
mainParent.style.flexDirection = "column";
mainParent.style.margin = "15px 0 0 0";

const mainParentClone = mainParent.cloneNode(true);
const installCommand = commonParentBetweenCodeAndButton.querySelector("code").textContent;
const packageName = installCommand.replace(/npm i(nstall)? */, "").trim();

function addCustomInstallCommand(command) {
    const installCommand = command.replace(/<package_name>/g, packageName);
    const newInstallCommand = mainParentClone.cloneNode(true);
    const newInstallCode = newInstallCommand.querySelector("code");
    const newInstallButton = newInstallCommand.querySelector("button");
    
    newInstallCode.textContent = installCommand;
    newInstallButton.addEventListener("click", () => navigator.clipboard.writeText(installCommand) );
    newInstallButton.setAttribute("aria-label", "Alternate install command line");
    mainParent.appendChild(newInstallCommand);
}

// Add custom your own package managers here
// <package_name> will be replaced with the name of the package
addCustomInstallCommand("bun i <package_name>");
addCustomInstallCommand("yarn add <package_name>");
addCustomInstallCommand("pnpm add <package_name>");
