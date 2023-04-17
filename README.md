# Bear Scoresheets frontend

## Install

_Make sure you're using Node major version **14**._

Clone the repository and then run:
```bash
npm i && npm run start
```

The UI will be served on `http://localhost:8080/`.


## Note about M1 Macs

There is no native binary for Node 14 for ARM.
If you're running a Mac with Apple Silicon, follow these steps to install Node 14 (via Rosetta):

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
softwareupdate --install-rosetta
arch -x86_64 bash
source "${NVM_DIR}/nvm.sh"
nvm install 14 --shared-zlib
nvm use 14
exit
```