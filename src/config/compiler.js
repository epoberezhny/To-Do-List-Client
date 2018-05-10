export default function compilerConfig($compileProvider) {
  $compileProvider.debugInfoEnabled(process.env.NODE_ENV !== 'production');
  $compileProvider.commentDirectivesEnabled(false);
  $compileProvider.cssClassDirectivesEnabled(false);
}

compilerConfig.$inject = ['$compileProvider'];
