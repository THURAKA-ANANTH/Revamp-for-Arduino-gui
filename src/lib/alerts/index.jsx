import React from 'react';
import {FormattedMessage} from 'react-intl';
import keyMirror from 'keymirror';

import successImage from '../assets/icon--success.svg';

const AlertTypes = keyMirror({
    STANDARD: null,
    EXTENSION: null,
    INLINE: null
});

const AlertLevels = {
    SUCCESS: 'success',
    INFO: 'info',
    WARN: 'warn'
};

const alerts = [
    {
        alertId: 'createSuccess',
        alertType: AlertTypes.STANDARD,
        clearList: ['createSuccess', 'creating', 'createCopySuccess', 'creatingCopy',
            'createRemixSuccess', 'creatingRemix', 'saveSuccess', 'saving'],
        content: (
            <FormattedMessage
                defaultMessage="New project created."
                description="Message indicating that project was successfully created"
                id="gui.alerts.createsuccess"
            />
        ),
        iconURL: successImage,
        level: AlertLevels.SUCCESS,
        maxDisplaySecs: 5
    },
    {
        alertId: 'createCopySuccess',
        alertType: AlertTypes.STANDARD,
        clearList: ['createSuccess', 'creating', 'createCopySuccess', 'creatingCopy',
            'createRemixSuccess', 'creatingRemix', 'saveSuccess', 'saving'],
        content: (
            <FormattedMessage
                defaultMessage="Project saved as a copy."
                description="Message indicating that project was successfully created"
                id="gui.alerts.createcopysuccess"
            />
        ),
        iconURL: successImage,
        level: AlertLevels.SUCCESS,
        maxDisplaySecs: 5
    },
    {
        alertId: 'createRemixSuccess',
        alertType: AlertTypes.STANDARD,
        clearList: ['createSuccess', 'creating', 'createCopySuccess', 'creatingCopy',
            'createRemixSuccess', 'creatingRemix', 'saveSuccess', 'saving'],
        content: (
            <FormattedMessage
                defaultMessage="Project saved as a remix."
                description="Message indicating that project was successfully created"
                id="gui.alerts.createremixsuccess"
            />
        ),
        iconURL: successImage,
        level: AlertLevels.SUCCESS,
        maxDisplaySecs: 5
    },
    {
        alertId: 'creating',
        alertType: AlertTypes.STANDARD,
        clearList: ['createSuccess', 'creating', 'createCopySuccess', 'creatingCopy',
            'createRemixSuccess', 'creatingRemix', 'saveSuccess', 'saving'],
        content: (
            <FormattedMessage
                defaultMessage="Creating new…"
                description="Message indicating that project is in process of creating"
                id="gui.alerts.creating"
            />
        ),
        iconSpinner: true,
        level: AlertLevels.SUCCESS
    },
    {
        alertId: 'creatingCopy',
        alertType: AlertTypes.STANDARD,
        clearList: ['createSuccess', 'creating', 'createCopySuccess', 'creatingCopy',
            'createRemixSuccess', 'creatingRemix', 'saveSuccess', 'saving'],
        content: (
            <FormattedMessage
                defaultMessage="Copying project…"
                description="Message indicating that project is in process of copying"
                id="gui.alerts.creatingCopy"
            />
        ),
        iconSpinner: true,
        level: AlertLevels.SUCCESS
    },
    {
        alertId: 'creatingRemix',
        alertType: AlertTypes.STANDARD,
        clearList: ['createSuccess', 'creating', 'createCopySuccess', 'creatingCopy',
            'createRemixSuccess', 'creatingRemix', 'saveSuccess', 'saving'],
        content: (
            <FormattedMessage
                defaultMessage="Remixing project…"
                description="Message indicating that project is in process of remixing"
                id="gui.alerts.creatingRemix"
            />
        ),
        iconSpinner: true,
        level: AlertLevels.SUCCESS
    },
    {
        alertId: 'creatingError',
        clearList: ['createSuccess', 'creating', 'createCopySuccess', 'creatingCopy',
            'createRemixSuccess', 'creatingRemix', 'saveSuccess', 'saving'],
        closeButton: true,
        content: (
            <FormattedMessage
                defaultMessage="Could not create the project. Please try again!"
                description="Message indicating that project could not be created"
                id="gui.alerts.creatingError"
            />
        ),
        level: AlertLevels.WARN
    },
    {
        alertId: 'savingError',
        clearList: ['createSuccess', 'creating', 'createCopySuccess', 'creatingCopy',
            'createRemixSuccess', 'creatingRemix', 'saveSuccess', 'saving'],
        showDownload: true,
        showSaveNow: true,
        closeButton: false,
        content: (
            <FormattedMessage
                defaultMessage="Project could not save."
                description="Message indicating that project could not be saved"
                id="gui.alerts.savingError"
            />
        ),
        level: AlertLevels.WARN
    },
    {
        alertId: 'saveSuccess',
        alertType: AlertTypes.INLINE,
        clearList: ['saveSuccess', 'saving', 'savingError'],
        content: (
            <FormattedMessage
                defaultMessage="Project saved."
                description="Message indicating that project was successfully saved"
                id="gui.alerts.savesuccess"
            />
        ),
        iconURL: successImage,
        level: AlertLevels.SUCCESS,
        maxDisplaySecs: 3
    },
    {
        alertId: 'saving',
        alertType: AlertTypes.INLINE,
        clearList: ['saveSuccess', 'saving', 'savingError'],
        content: (
            <FormattedMessage
                defaultMessage="Saving project…"
                description="Message indicating that project is in process of saving"
                id="gui.alerts.saving"
            />
        ),
        iconSpinner: true,
        level: AlertLevels.INFO
    },
    {
        alertId: 'cloudInfo',
        alertType: AlertTypes.STANDARD,
        clearList: ['cloudInfo'],
        content: (
            <FormattedMessage
                defaultMessage="Please note, cloud variables only support numbers, not letters or symbols. {learnMoreLink}" // eslint-disable-line max-len
                description="Info about cloud variable limitations"
                id="gui.alerts.cloudInfo"
                values={{
                    learnMoreLink: (
                        <a
                            href="https://scratch.mit.edu/info/faq/#clouddata"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <FormattedMessage
                                defaultMessage="Learn more."
                                description="Link text to cloud var faq"
                                id="gui.alerts.cloudInfoLearnMore"
                            />
                        </a>
                    )
                }}
            />
        ),
        closeButton: true,
        level: AlertLevels.SUCCESS,
        maxDisplaySecs: 15
    },
    {
        alertId: 'importingAsset',
        alertType: AlertTypes.STANDARD,
        clearList: [],
        content: (
            <FormattedMessage
                defaultMessage="Importing…"
                description="Message indicating that project is in process of importing"
                id="gui.alerts.importing"
            />
        ),
        iconSpinner: true,
        level: AlertLevels.SUCCESS
    },
    {
        alertId: 'workspaceIsEmpty',
        alertType: AlertTypes.STANDARD,
        clearList: ['workspaceIsEmpty'],
        closeButton: true,
        content: (
            <FormattedMessage
                defaultMessage="Workspace is empty"
                description="Message indicating that workspace is empty"
                id="gui.alerts.workspaceIsEmpty"
            />
        ),
        level: AlertLevels.WARN,
        maxDisplaySecs: 5
    },
    {
        alertId: 'workspaceIsNotEmpty',
        alertType: AlertTypes.STANDARD,
        clearList: ['workspaceIsNotEmpty'],
        closeButton: true,
        content: (
            <FormattedMessage
                defaultMessage="Workspace is not empty, plese clean you workspace first"
                description="Message indicating that workspace is not empty"
                id="gui.alerts.workspaceIsNotEmpty"
            />
        ),
        level: AlertLevels.WARN,
        maxDisplaySecs: 5
    },
    {
        alertId: 'uploadError',
        alertType: AlertTypes.STANDARD,
        clearList: ['uploadError'],
        closeButton: true,
        content: (
            <FormattedMessage
                defaultMessage="Upload error"
                description="Message indicating that upload progress is error"
                id="gui.alerts.uploadError"
            />
        ),
        level: AlertLevels.WARN,
        maxDisplaySecs: 5
    },
    {
        alertId: 'uploadSuccess',
        alertType: AlertTypes.STANDARD,
        clearList: ['uploadSuccess', 'uploadError'],
        closeButton: true,
        content: (
            <FormattedMessage
                defaultMessage="Upload success"
                description="Message indicating that upload progress is success"
                id="gui.alerts.uploadSuccess"
            />
        ),
        level: AlertLevels.SUCCESS,
        maxDisplaySecs: 5
    },
    {
        alertId: 'selectADeviceFirst',
        alertType: AlertTypes.STANDARD,
        clearList: ['selectADeviceFirst'],
        closeButton: true,
        content: (
            <FormattedMessage
                defaultMessage="Plese select a device first"
                description="Message indicating that device is not selected"
                id="gui.alerts.selectADeviceFirst"
            />
        ),
        level: AlertLevels.WARN,
        maxDisplaySecs: 5
    },
    {
        alertId: 'connectAPeripheralFirst',
        alertType: AlertTypes.STANDARD,
        clearList: ['connectAPeripheralFirst'],
        closeButton: true,
        content: (
            <FormattedMessage
                defaultMessage="Plese connect a peripheral first"
                description="Message indicating that no peripheral is connected"
                id="gui.alerts.connectAPeripheralFirst"
            />
        ),
        level: AlertLevels.WARN,
        maxDisplaySecs: 5
    },
    {
        alertId: 'codeEditorIsLocked',
        alertType: AlertTypes.STANDARD,
        clearList: ['codeEditorIsLocked', 'codeEditorIsUnlocked'],
        closeButton: true,
        content: (
            <FormattedMessage
                defaultMessage="Code editor is in lock state, if you want to edit the code, please unlock it first"
                description="Message indicating that code editor is in lock state"
                id="gui.alerts.codeEditorIsLocked"
            />
        ),
        level: AlertLevels.WARN,
        maxDisplaySecs: 5
    },
    {
        alertId: 'codeEditorIsUnlocked',
        alertType: AlertTypes.STANDARD,
        clearList: ['codeEditorIsUnlocked', 'codeEditorIslocked'],
        closeButton: true,
        content: (
            <FormattedMessage
                defaultMessage="Code editor is in unlock state, if you want to generate code from block, please lock it first"
                description="Message indicating that code editor is in unlock state"
                id="gui.alerts.codeEditorIsUnlocked"
            />
        ),
        level: AlertLevels.WARN,
        maxDisplaySecs: 5
    }
];

export {
    alerts as default,
    AlertLevels,
    AlertTypes
};
