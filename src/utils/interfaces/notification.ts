import { enumNotification } from 'utils/auxFunctions/general';

export interface INotification {
    state : enumNotification
    title ?: string
    description ?: string
    body ?: string
    onConfirmFunc ?: any
    onAlternativeFunc ?: any
    onDismissFunc ?: any
    confirmText ?: string
    alternativeText ?: string
    dismissText ?: string
}