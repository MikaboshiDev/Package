type Labels = 'error' | 'success' | 'api' | 'multihub' | 'website' | 'debug' | 'express' | 'bots' | 'info' | 'database' | 'whatsapp' | 'discord' | 'telegram' | 'maintenance';
/**
 * The function `logWithLabel` logs a message with a specified label and sends it to a Discord webhook.
 * @param {Labels} label - The `label` parameter in the `logWithLabel` function is used to specify the
 * type or category of the log message being logged. It is of type `Labels`, which likely is an enum or
 * a defined set of possible values representing different labels or categories for the log message.
 * @param {string} message - The `message` parameter in the `logWithLabel` function is a string that
 * represents the actual message or content that you want to log with a specific label. It could be any
 * information, warning, error, or status update that you want to display along with the label.
 */
export declare function logWithLabel(label: Labels, message: string): void;
export {};
