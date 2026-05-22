param(
  [Parameter(Mandatory=$true)]
  [string]$RepoName,
  [string]$RemoteUrl
)

# Use this script after installing Git and authenticating with GitHub.
# Example:
# .\deploy-to-github.ps1 -RepoName "KnightsQuest" -RemoteUrl "https://github.com/username/KnightsQuest.git"

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  Write-Error "Git is not installed or not available in PATH. Install Git and retry."
  exit 1
}

Set-Location $PSScriptRoot

git init
git add .
git commit -m "Initial website deployment"

if ($RemoteUrl) {
  git remote add origin $RemoteUrl
  git branch -M main
  git push -u origin main
  Write-Host "Pushed to $RemoteUrl"
} else {
  Write-Host "Repository initialized locally. Add a remote URL and push manually."
  Write-Host "Example: git remote add origin https://github.com/username/$RepoName.git"
}
