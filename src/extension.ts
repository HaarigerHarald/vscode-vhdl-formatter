'use strict';

import * as vscode from 'vscode';
import * as VHDLFormatter from './VHDLFormatter/VHDLFormatter';
import * as config from "./config";

function getDocumentRange(document: vscode.TextDocument)
{
	var start = new vscode.Position(0, 0);
	var lastLine = document.lineCount - 1;
	var end = new vscode.Position(lastLine, document.lineAt(lastLine).text.length);
	return new vscode.Range(start, end);
}

export function activate(context: vscode.ExtensionContext)
{

	vscode.languages.registerDocumentFormattingEditProvider('vhdl', {
		provideDocumentFormattingEdits(document: vscode.TextDocument,
			options: vscode.FormattingOptions, token: vscode.CancellationToken): vscode.TextEdit[]
		{
			var result: vscode.TextEdit[] = [];
			const beautifierSettings = config.getConfig(options);

			var formatted = VHDLFormatter.beautify(document.getText(), beautifierSettings);

			if (config.getExtSettings<boolean>(config.CONFIGURATION_REMOVE_BLANK_LINES, false))
			{
				const eol = beautifierSettings.EndOfLine;
				formatted = formatted.replace(new RegExp(eol + '*[ \t]*' + eol, 'g'), eol);
			}

			if (formatted)
			{
				result.push(new vscode.TextEdit(getDocumentRange(document), formatted));
			}
			return result;
		}
	});
}
