const { appSlug } = require('../../../config/app-strings');

export function getControls() {
  return `\n\n---\n\n - [ ] <!-- ${appSlug}-rebase -->If you want to rebase/retry this PR, check this box\n\n`;
}