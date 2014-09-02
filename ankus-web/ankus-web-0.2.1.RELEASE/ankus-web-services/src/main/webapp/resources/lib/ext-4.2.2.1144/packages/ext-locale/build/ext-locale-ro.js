/*
 This file is part of Ext JS 4.2

 Copyright (c) 2011-2013 Sencha Inc

 Contact:  http://www.sencha.com/contact

 Commercial Usage
 Licensees holding valid commercial licenses may use this file in accordance with the Commercial
 Software License Agreement provided with the Software or, alternatively, in accordance with the
 terms contained in a written agreement between you and Sencha.

 If you are unsure which license is appropriate for your use, please contact the sales department
 at http://www.sencha.com/contact.

 Build date: 2013-09-18 17:18:59 (940c324ac822b840618a3a8b2b4b873f83a1a9b1)
 */
Ext.onReady(function () {
    if (Ext.Date) {
        Ext.Date.monthNames = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];
        Ext.Date.getShortMonthName = function (a) {
            return Ext.Date.monthNames[a].substring(0, 3)
        };
        Ext.Date.monthNumbers = {Ian: 0, Feb: 1, Mar: 2, Apr: 3, Mai: 4, Iun: 5, Iul: 6, Aug: 7, Sep: 8, Oct: 9, Noi: 10, Dec: 11};
        Ext.Date.getMonthNumber = function (a) {
            return Ext.Date.monthNumbers[a.substring(0, 1).toUpperCase() + a.substring(1, 3).toLowerCase()]
        };
        Ext.Date.dayNames = ["Duminică", "Luni", "Marţi", "Miercuri", "Joi", "Vineri", "Sâmbătă"];
        Ext.Date.getShortDayName = function (a) {
            return Ext.Date.dayNames[a].substring(0, 3)
        }
    }
    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {thousandSeparator: ".", decimalSeparator: ",", currencySign: "Lei", dateFormat: "d.m.Y"})
    }
});
Ext.define("Ext.locale.ro.grid.plugin.DragDrop", {override: "Ext.grid.plugin.DragDrop", dragText: "{0} rând(uri) selectate"});
Ext.define("Ext.locale.ro.tab.Tab", {override: "Ext.tab.Tab", closeText: "Închide acest tab"});
Ext.define("Ext.locale.ro.form.field.Base", {override: "Ext.form.field.Base", invalidText: "Valoarea acestui câmp este invalidă"});
Ext.define("Ext.locale.ro.view.AbstractView", {override: "Ext.view.AbstractView", loadingText: "Încărcare..."});
Ext.define("Ext.locale.ro.picker.Date", {override: "Ext.picker.Date", todayText: "Astăzi", minText: "Această dată este anterioară datei minime", maxText: "Această dată este ulterioară datei maxime", disabledDaysText: "", disabledDatesText: "", nextText: "Luna următoare (Control+Dreapta)", prevText: "Luna precedentă (Control+Stânga)", monthYearText: "Alege o lună (Control+Sus/Jos pentru a parcurge anii)", todayTip: "{0} (Bara spațiu)", format: "d.m.Y", startDay: 0});
Ext.define("Ext.locale.ro.picker.Month", {override: "Ext.picker.Month", okText: "&#160;OK&#160;", cancelText: "Renunță"});
Ext.define("Ext.locale.ro.toolbar.Paging", {override: "Ext.PagingToolbar", beforePageText: "Pagina", afterPageText: "din {0}", firstText: "Prima pagină", prevText: "Pagina anterioară", nextText: "Pagina următoare", lastText: "Ultima pagină", refreshText: "Împrospătează", displayMsg: "Afișare înregistrările {0} - {1} din {2}", emptyMsg: "Nu sunt date de afișat"});
Ext.define("Ext.locale.ro.form.field.Text", {override: "Ext.form.field.Text", minLengthText: "Lungimea minimă pentru acest câmp este de {0}", maxLengthText: "Lungimea maximă pentru acest câmp este {0}", blankText: "Acest câmp este obligatoriu", regexText: "", emptyText: null});
Ext.define("Ext.locale.ro.form.field.Number", {override: "Ext.form.field.Number", minText: "Valoarea minimă permisă a acestui câmp este {0}", maxText: "Valaorea maximă permisă a acestui câmp este {0}", nanText: "{0} nu este un număr valid"});
Ext.define("Ext.locale.ro.form.field.Date", {override: "Ext.form.field.Date", disabledDaysText: "Indisponibil", disabledDatesText: "Indisponibil", minText: "Data din această casetă trebuie să fie după {0}", maxText: "Data din această casetă trebuie să fie inainte de {0}", invalidText: "{0} nu este o dată validă, trebuie să fie în formatul {1}", format: "d.m.Y", altFormats: "d-m-Y|d.m.y|d-m-y|d.m|d-m|dm|d|Y-m-d"});
Ext.define("Ext.locale.ro.form.field.ComboBox", {override: "Ext.form.field.ComboBox", valueNotFoundText: undefined}, function () {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {loadingText: "Încărcare..."})
});
Ext.define("Ext.locale.ro.form.field.VTypes", {override: "Ext.form.field.VTypes", emailText: 'Acest câmp trebuie să conţină o adresă de e-mail în formatul "user@domeniu.com"', urlText: 'Acest câmp trebuie să conţină o adresă URL în formatul "http://www.domeniu.com"', alphaText: "Acest câmp trebuie să conţină doar litere şi _", alphanumText: "Acest câmp trebuie să conţină doar litere, cifre şi _"});
Ext.define("Ext.locale.ro.form.field.HtmlEditor", {override: "Ext.form.field.HtmlEditor", createLinkText: "Vă rugăm introduceti un URL pentru această legătură web:"}, function () {
    Ext.apply(Ext.form.field.HtmlEditor.prototype, {buttonTips: {bold: {title: "Îngroşat (Ctrl+B)", text: "Îngroşati caracterele textului selectat.", cls: Ext.baseCSSPrefix + "html-editor-tip"}, italic: {title: "Înclinat (Ctrl+I)", text: "Înclinaţi caracterele textului selectat.", cls: Ext.baseCSSPrefix + "html-editor-tip"}, underline: {title: "Subliniat (Ctrl+U)", text: "Subliniaţi caracterele textului selectat.", cls: Ext.baseCSSPrefix + "html-editor-tip"}, increasefontsize: {title: "Mărit", text: "Măreşte dimensiunea fontului.", cls: Ext.baseCSSPrefix + "html-editor-tip"}, decreasefontsize: {title: "Micşorat", text: "Micşorează dimensiunea textului.", cls: Ext.baseCSSPrefix + "html-editor-tip"}, backcolor: {title: "Culoarea fundalului", text: "Schimbă culoarea fundalului pentru textul selectat.", cls: Ext.baseCSSPrefix + "html-editor-tip"}, forecolor: {title: "Culoarea textului", text: "Schimbă culoarea textului selectat.", cls: Ext.baseCSSPrefix + "html-editor-tip"}, justifyleft: {title: "Aliniat la stânga", text: "Aliniază textul la stânga.", cls: Ext.baseCSSPrefix + "html-editor-tip"}, justifycenter: {title: "Centrat", text: "Centrează textul în editor.", cls: Ext.baseCSSPrefix + "html-editor-tip"}, justifyright: {title: "Aliniat la dreapta", text: "Aliniază textul la dreapta.", cls: Ext.baseCSSPrefix + "html-editor-tip"}, insertunorderedlist: {title: "Listă cu puncte", text: "Inserează listă cu puncte.", cls: Ext.baseCSSPrefix + "html-editor-tip"}, insertorderedlist: {title: "Listă numerotată", text: "Inserează o listă numerotată.", cls: Ext.baseCSSPrefix + "html-editor-tip"}, createlink: {title: "Legătură web", text: "Transformă textul selectat în legătură web.", cls: Ext.baseCSSPrefix + "html-editor-tip"}, sourceedit: {title: "Editare sursă", text: "Schimbă pe modul de editare al codului HTML.", cls: Ext.baseCSSPrefix + "html-editor-tip"}}})
});
Ext.define("Ext.locale.ro.grid.header.Container", {override: "Ext.grid.header.Container", sortAscText: "Sortare ascendentă", sortDescText: "Sortare descendentă", lockText: "Blochează coloana", unlockText: "Deblochează coloana", columnsText: "Coloane"});
Ext.define("Ext.locale.ro.grid.GroupingFeature", {override: "Ext.grid.feature.Grouping", emptyGroupText: "(Fără)", groupByText: "Grupează după această coloană", showGroupsText: "Afișează grupat"});
Ext.define("Ext.locale.ro.grid.PropertyColumnModel", {override: "Ext.grid.PropertyColumnModel", nameText: "Nume", valueText: "Valoare", dateFormat: "d.m.Y"});
Ext.define("Ext.locale.ro.window.MessageBox", {override: "Ext.window.MessageBox", buttonText: {ok: "OK", cancel: "Renunţă", yes: "Da", no: "Nu"}});
Ext.define("Ext.locale.ro.Component", {override: "Ext.Component"});