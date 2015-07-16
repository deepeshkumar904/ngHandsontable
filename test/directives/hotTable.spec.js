
describe('hotTable', function() {
  var rootScope, compile;

  beforeEach(module('ngHandsontable'));

  beforeEach(inject(function(_$compile_, _$rootScope_, $q) {
    rootScope = _$rootScope_;
    compile = _$compile_;
    q = $q;
  }));

  afterEach(function() {
    angular.element(document.querySelector('hot-table')).remove();
  });

  it('should create Handsontable table', function() {
    var scope = angular.element(compile('<hot-table></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance).toBeDefined();
  });

  it('should create table with `datarows` attribute', function() {
    rootScope.value = [[]];
    var scope = angular.element(compile('<hot-table datarows="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getData()).toBe(rootScope.value);
  });

  it('should create table with `dataSchema` attribute', function() {
    rootScope.value = {id: null};
    var scope = angular.element(compile('<hot-table data-schema="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSchema()).toBe(rootScope.value);
  });

  it('should create table with `width` attribute', function() {
    rootScope.value = 333;
    var scope = angular.element(compile('<hot-table width="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().width).toBe(rootScope.value);
  });

  it('should create table with `height` attribute', function() {
    rootScope.value = 333;
    var scope = angular.element(compile('<hot-table height="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().height).toBe(rootScope.value);
  });

  it('should create table with `startRows` attribute', function() {
    rootScope.value = 12;
    var scope = angular.element(compile('<hot-table startrows="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().startRows).toBe(rootScope.value);
  });

  it('should create table with `startCols` attribute', function() {
    rootScope.value = 12;
    var scope = angular.element(compile('<hot-table startcols="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().startCols).toBe(rootScope.value);
  });

  it('should create table with `rowHeaders` attribute', function() {
    rootScope.value = function(index){return index + 'A'};
    var scope = angular.element(compile('<hot-table rowheaders="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().rowHeaders(1)).toBe('1A');
  });

  it('should create table with `colHeaders` attribute', function() {
    rootScope.value = 'AAA';
    var scope = angular.element(compile('<hot-table colheaders="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().colHeaders).toBe('AAA');
  });

  it('should create table with `colWidths` attribute', function() {
    rootScope.value = [10, 20, 30];
    var scope = angular.element(compile('<hot-table colwidths="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().colWidths).toBe(rootScope.value);
  });

  it('should create table with `columns` attribute', function() {
    rootScope.value = [{width: 10, type: 'date'}, {type: 'numeric', format: '$0'}];
    var scope = angular.element(compile('<hot-table columns="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().columns).toBe(rootScope.value);
  });

  it('should create table with `cells` attribute', function() {
    rootScope.value = function(row, col, prop) { return [row, col, prop].join('|') };
    var scope = angular.element(compile('<hot-table cells="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().cells(1, 2, 3)).toBe('1|2|3');
  });

  it('should create table with `cell` attribute', function() {
    rootScope.value = function(row, col, prop) { return [row, col, prop].join('|') };
    var scope = angular.element(compile('<hot-table cell="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().cell(1, 2, 3)).toBe('1|2|3');
  });

  it('should create table with `comments` attribute', function() {
    rootScope.value = [{row: 1, col: 1, comment: 'Test'}];
    var scope = angular.element(compile('<hot-table comments="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().comments).toBe(rootScope.value);
  });

  it('should create table with `customBorders` attribute', function() {
    rootScope.value = [{range: {
      from: {row: 1, col: 1},
      to: {row: 3, col: 4}},
      left: {},
      right: {},
      top: {},
      bottom: {}
    }];
    var scope = angular.element(compile('<hot-table customborders="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().customBorders).toBe(rootScope.value);
  });

  it('should create table with `minRows` attribute', function() {
    rootScope.value = 16;
    var scope = angular.element(compile('<hot-table minrows="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().minRows).toBe(rootScope.value);
  });

  it('should create table with `minCols` attribute', function() {
    rootScope.value = 16;
    var scope = angular.element(compile('<hot-table mincols="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().minCols).toBe(rootScope.value);
  });

  it('should create table with `maxRows` attribute', function() {
    rootScope.value = 16;
    var scope = angular.element(compile('<hot-table maxrows="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().maxRows).toBe(rootScope.value);
  });

  it('should create table with `maxCols` attribute', function() {
    rootScope.value = 16;
    var scope = angular.element(compile('<hot-table maxcols="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().maxCols).toBe(rootScope.value);
  });

  it('should create table with `minSpareRows` attribute', function() {
    rootScope.value = 16;
    var scope = angular.element(compile('<hot-table minsparerows="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().minSpareRows).toBe(rootScope.value);
  });

  it('should create table with `minSpareCols` attribute', function() {
    rootScope.value = 16;
    var scope = angular.element(compile('<hot-table minsparecols="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().minSpareCols).toBe(rootScope.value);
  });

  it('should create table with `allowInsertRow` attribute', function() {
    rootScope.value = false;
    var scope = angular.element(compile('<hot-table allowinsertrow="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().allowInsertRow).toBe(rootScope.value);
  });

  it('should create table with `allowInsertColumn` attribute', function() {
    rootScope.value = false;
    var scope = angular.element(compile('<hot-table allowinsertcolumn="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().allowInsertColumn).toBe(rootScope.value);
  });

  it('should create table with `allowRemoveRow` attribute', function() {
    rootScope.value = false;
    var scope = angular.element(compile('<hot-table allowremoverow="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().allowRemoveRow).toBe(rootScope.value);
  });

  it('should create table with `allowRemoveColumn` attribute', function() {
    rootScope.value = false;
    var scope = angular.element(compile('<hot-table allowremovecolumn="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().allowRemoveColumn).toBe(rootScope.value);
  });

  it('should create table with `multiSelect` attribute', function() {
    rootScope.value = false;
    var scope = angular.element(compile('<hot-table multiselect="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().multiSelect).toBe(rootScope.value);
  });

  it('should create table with `multiSelect` attribute', function() {
    rootScope.value = false;
    var scope = angular.element(compile('<hot-table multiselect="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().multiSelect).toBe(rootScope.value);
  });

  it('should create table with `fillHandle` attribute', function() {
    rootScope.value = false;
    var scope = angular.element(compile('<hot-table fillhandle="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().fillHandle).toBe(rootScope.value);
  });

  it('should create table with `fixedRowsTop` attribute', function() {
    rootScope.value = 12;
    var scope = angular.element(compile('<hot-table fixedrowstop="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().fixedRowsTop).toBe(rootScope.value);
  });

  it('should create table with `fixedColumnsLeft` attribute', function() {
    rootScope.value = 12;
    var scope = angular.element(compile('<hot-table fixedcolumnsleft="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().fixedColumnsLeft).toBe(rootScope.value);
  });

  it('should create table with `outsideClickDeselects` attribute', function() {
    rootScope.value = false;
    var scope = angular.element(compile('<hot-table outsideclickdeselects="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().outsideClickDeselects).toBe(rootScope.value);
  });

  it('should create table with `enterBeginsEditing` attribute', function() {
    rootScope.value = false;
    var scope = angular.element(compile('<hot-table enterbeginsediting="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().enterBeginsEditing).toBe(rootScope.value);
  });

  it('should create table with `enterMoves` attribute', function() {
    rootScope.value = {row: 3, col: 2};
    var scope = angular.element(compile('<hot-table entermoves="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().enterMoves).toBe(rootScope.value);
  });

  it('should create table with `tabMoves` attribute', function() {
    rootScope.value = {row: 3, col: 2};
    var scope = angular.element(compile('<hot-table tabmoves="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().tabMoves).toBe(rootScope.value);
  });

  it('should create table with `autoWrapRow` attribute', function() {
    rootScope.value = true;
    var scope = angular.element(compile('<hot-table autowraprow="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().autoWrapRow).toBe(rootScope.value);
  });

  it('should create table with `autoWrapCol` attribute', function() {
    rootScope.value = true;
    var scope = angular.element(compile('<hot-table autowrapcol="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().autoWrapCol).toBe(rootScope.value);
  });

  it('should create table with `copyRowsLimit` attribute', function() {
    rootScope.value = 563;
    var scope = angular.element(compile('<hot-table copyrowslimit="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().copyRowsLimit).toBe(rootScope.value);
  });

  it('should create table with `copyColsLimit` attribute', function() {
    rootScope.value = 563;
    var scope = angular.element(compile('<hot-table copycolslimit="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().copyColsLimit).toBe(rootScope.value);
  });

  it('should create table with `pasteMode` attribute', function() {
    rootScope.value = 'test';
    var scope = angular.element(compile('<hot-table pastemode="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().pasteMode).toBe(rootScope.value);
  });

  it('should create table with `persistentState` attribute', function() {
    rootScope.value = true;
    var scope = angular.element(compile('<hot-table persistentstate="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().persistentState).toBe(rootScope.value);
  });

  it('should create table with `currentRowClassName` attribute', function() {
    rootScope.value = 'class-name';
    var scope = angular.element(compile('<hot-table currentrowclassname="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().currentRowClassName).toBe(rootScope.value);
  });

  it('should create table with `currentColClassName` attribute', function() {
    rootScope.value = 'class-name';
    var scope = angular.element(compile('<hot-table currentcolclassname="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().currentColClassName).toBe(rootScope.value);
  });

  it('should create table with `stretchH` attribute', function() {
    rootScope.value = 'all';
    var scope = angular.element(compile('<hot-table stretchh="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().stretchH).toBe(rootScope.value);
  });

  it('should create table with `isEmptyRow` attribute', function() {
    rootScope.value = function(a) {return a;};
    var scope = angular.element(compile('<hot-table isemptyrow="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().isEmptyRow(2)).toBe(2);
  });

  it('should create table with `isEmptyCol` attribute', function() {
    rootScope.value = function(a) {return a;};
    var scope = angular.element(compile('<hot-table isemptycol="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().isEmptyCol(2)).toBe(2);
  });

  it('should create table with `observeDOMVisibility` attribute', function() {
    rootScope.value = false;
    var scope = angular.element(compile('<hot-table observedomvisibility="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().observeDOMVisibility).toBe(rootScope.value);
  });

  it('should create table with `allowInvalid` attribute', function() {
    rootScope.value = false;
    var scope = angular.element(compile('<hot-table allowinvalid="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().allowInvalid).toBe(rootScope.value);
  });

  it('should create table with `invalidCellClassName` attribute', function() {
    rootScope.value = 'class-name';
    var scope = angular.element(compile('<hot-table invalidcellclassname="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().invalidCellClassName).toBe(rootScope.value);
  });

  it('should create table with `placeholder` attribute', function() {
    rootScope.value = true;
    var scope = angular.element(compile('<hot-table placeholder="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().placeholder).toBe(rootScope.value);
  });

  it('should create table with `placeholderCellClassName` attribute', function() {
    rootScope.value = 'class-name';
    var scope = angular.element(compile('<hot-table placeholdercellclassname="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().placeholderCellClassName).toBe(rootScope.value);
  });

  it('should create table with `readOnlyCellClassName` attribute', function() {
    rootScope.value = 'class-name';
    var scope = angular.element(compile('<hot-table readonlycellclassname="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().readOnlyCellClassName).toBe(rootScope.value);
  });

  it('should create table with `renderer` attribute', function() {
    rootScope.value = 'numeric';
    var scope = angular.element(compile('<hot-table renderer="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().renderer).toBe(rootScope.value);
  });

  it('should create table with `commentedCellClassName` attribute', function() {
    rootScope.value = 'class-name';
    var scope = angular.element(compile('<hot-table commentedcellclassname="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().commentedCellClassName).toBe(rootScope.value);
  });

  it('should create table with `fragmentSelection` attribute', function() {
    rootScope.value = true;
    var scope = angular.element(compile('<hot-table fragmentselection="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().fragmentSelection).toBe(rootScope.value);
  });

  it('should create table with `readOnly` attribute', function() {
    rootScope.value = true;
    var scope = angular.element(compile('<hot-table readonly="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().readOnly).toBe(rootScope.value);
  });

  it('should create table with `search` attribute', function() {
    rootScope.value = true;
    var scope = angular.element(compile('<hot-table search="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().search).toBe(rootScope.value);
  });

  it('should create table with `type` attribute', function() {
    rootScope.value = 'date';
    var scope = angular.element(compile('<hot-table type="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().type).toBe(rootScope.value);
  });

  it('should create table with `copyable` attribute', function() {
    rootScope.value = false;
    var scope = angular.element(compile('<hot-table copyable="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().copyable).toBe(rootScope.value);
  });

  it('should create table with `editor` attribute', function() {
    rootScope.value = 'date';
    var scope = angular.element(compile('<hot-table editor="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().editor).toBe(rootScope.value);
  });

  it('should create table with `autoComplete` attribute', function() {
    rootScope.value = true;
    var scope = angular.element(compile('<hot-table autocomplete="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().autoComplete).toBe(rootScope.value);
  });

  it('should create table with `debug` attribute', function() {
    rootScope.value = true;
    var scope = angular.element(compile('<hot-table debug="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().debug).toBe(rootScope.value);
  });

  it('should create table with `wordWrap` attribute', function() {
    rootScope.value = false;
    var scope = angular.element(compile('<hot-table wordwrap="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().wordWrap).toBe(rootScope.value);
  });

  it('should create table with `noWordWrapClassName` attribute', function() {
    rootScope.value = 'class-name';
    var scope = angular.element(compile('<hot-table nowordwrapclassname="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().noWordWrapClassName).toBe(rootScope.value);
  });

  it('should create table with `contextMenu` attribute', function() {
    rootScope.value = true;
    var scope = angular.element(compile('<hot-table contextmenu="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().contextMenu).toBe(rootScope.value);
  });

  it('should create table with `undo` attribute', function() {
    rootScope.value = true;
    var scope = angular.element(compile('<hot-table undo="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().undo).toBe(rootScope.value);
  });

  it('should create table with `columnSorting` attribute', function() {
    rootScope.value = true;
    var scope = angular.element(compile('<hot-table columnsorting="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().columnSorting).toBe(rootScope.value);
  });

  it('should create table with `manualColumnMove` attribute', function() {
    rootScope.value = true;
    var scope = angular.element(compile('<hot-table manualcolumnmove="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().manualColumnMove).toBe(rootScope.value);
  });

  it('should create table with `manualColumnResize` attribute', function() {
    rootScope.value = true;
    var scope = angular.element(compile('<hot-table manualcolumnresize="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().manualColumnResize).toBe(rootScope.value);
  });

  it('should create table with `manualRowMove` attribute', function() {
    rootScope.value = true;
    var scope = angular.element(compile('<hot-table manualrowmove="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().manualRowMove).toBe(rootScope.value);
  });

  it('should create table with `manualRowResize` attribute', function() {
    rootScope.value = true;
    var scope = angular.element(compile('<hot-table manualrowresize="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().manualRowResize).toBe(rootScope.value);
  });

  it('should create table with `mergeCells` attribute', function() {
    rootScope.value = true;
    var scope = angular.element(compile('<hot-table mergecells="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().mergeCells).toBe(rootScope.value);
  });

  it('should create table with `viewportRowRenderingOffset` attribute', function() {
    rootScope.value = 7;
    var scope = angular.element(compile('<hot-table viewportrowrenderingoffset="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().viewportRowRenderingOffset).toBe(rootScope.value);
  });

  it('should create table with `viewportColumnRenderingOffset` attribute', function() {
    rootScope.value = 7;
    var scope = angular.element(compile('<hot-table viewportcolumnrenderingoffset="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().viewportColumnRenderingOffset).toBe(rootScope.value);
  });

  //it('should create table with `groups` attribute', function() {
  //  rootScope.value = true;
  //  var scope = angular.element(compile('<hot-table groups="value"></hot-table>')(rootScope)).isolateScope();
  //
  //  scope.$digest();
  //
  //  expect(scope.hotInstance.getSettings().groups).toBe(rootScope.value);
  //});

  it('should create table with `validator` attribute', function() {
    rootScope.value = function(a) { return a === 1; };
    var scope = angular.element(compile('<hot-table validator="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().validator(0)).toBe(false);
    expect(scope.hotInstance.getSettings().validator(1)).toBe(true);
  });

  it('should create table with `disableVisualSelection` attribute', function() {
    rootScope.value = true;
    var scope = angular.element(compile('<hot-table disablevisualselection="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().disableVisualSelection).toBe(rootScope.value);
  });

  it('should create table with `sortIndicator` attribute', function() {
    rootScope.value = true;
    var scope = angular.element(compile('<hot-table sortindicator="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().sortIndicator).toBe(rootScope.value);
  });

  it('should create table with `manualColumnFreeze` attribute', function() {
    rootScope.value = true;
    var scope = angular.element(compile('<hot-table manualcolumnfreeze="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().manualColumnFreeze).toBe(rootScope.value);
  });

  it('should create table with `trimWhitespace` attribute', function() {
    rootScope.value = false;
    var scope = angular.element(compile('<hot-table trimwhitespace="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().trimWhitespace).toBe(rootScope.value);
  });

  it('should create table with `settings` attribute', function() {
    rootScope.value = {width: 100, trimWhitespace: false, sortIndicator: true, columns: [{type: 'date'}]};
    var scope = angular.element(compile('<hot-table settings="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().width).toBe(rootScope.value.width);
    expect(scope.hotInstance.getSettings().trimWhitespace).toBe(rootScope.value.trimWhitespace);
    expect(scope.hotInstance.getSettings().sortIndicator).toBe(rootScope.value.sortIndicator);
    expect(scope.hotInstance.getSettings().columns).toBe(rootScope.value.columns);
  });

  it('should create table with `source` attribute', function() {
    rootScope.value = ['a', 'b'];
    var scope = angular.element(compile('<hot-table source="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().source).toBe(rootScope.value);
  });

  it('should create table with `title` attribute', function() {
    rootScope.value = 'some title';
    var scope = angular.element(compile('<hot-table title="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().title).toBe(rootScope.value);
  });

  it('should create table with `checkedTemplate` attribute', function() {
    rootScope.value = 1;
    var scope = angular.element(compile('<hot-table checkedtemplate="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().checkedTemplate).toBe(rootScope.value);
  });

  it('should create table with `uncheckedTemplate` attribute', function() {
    rootScope.value = -1;
    var scope = angular.element(compile('<hot-table uncheckedtemplate="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().uncheckedTemplate).toBe(rootScope.value);
  });

  it('should create table with `format` attribute', function() {
    rootScope.value = '$0,0.0';
    var scope = angular.element(compile('<hot-table format="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().format).toBe(rootScope.value);
  });

  it('should create table with `className` attribute', function() {
    rootScope.value = 'class-name';
    var scope = angular.element(compile('<hot-table classname="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().className).toBe(rootScope.value);
  });

  it('should create table with `autoColumnSize` attribute', function() {
    rootScope.value = true;
    var scope = angular.element(compile('<hot-table autocolumnsize="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().autoColumnSize).toBe(rootScope.value);
  });

  it('should create table with `autoRowSize` attribute', function() {
    rootScope.value = true;
    var scope = angular.element(compile('<hot-table autorowsize="value"></hot-table>')(rootScope)).isolateScope();

    scope.$digest();

    expect(scope.hotInstance.getSettings().autoRowSize).toBe(rootScope.value);
  });
});
