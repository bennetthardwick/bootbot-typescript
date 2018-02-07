import { Conversation } from './Conversation';
import { EventEmitter } from 'eventemitter3';
export declare class BootBot extends EventEmitter {
    private accessToken;
    private verifyToken;
    private appSecret;
    private broadcastEchoes;
    private app;
    private server;
    private webhook;
    private _hearMap;
    private _conversations;
    constructor(options: any);
    start(port: any): void;
    close(): void;
    sendTextMessage(recipientId: any, text: string, quickReplies: any, options: any): any;
    sendButtonTemplate(recipientId: any, text: any, buttons: any, options: any): any;
    sendGenericTemplate(recipientId: any, elements: any, options: any): any;
    sendListTemplate(recipientId: any, elements: any, buttons: any, options: any): any;
    sendTemplate(recipientId: any, payload: any, options: any): any;
    sendAttachment(recipientId: any, type: any, url: any, quickReplies: any, options: any): any;
    sendAction(recipientId: any, action?: any, options?: any): any;
    sendMessage(recipientId: any, message: any, options: any): any;
    sendRequest(body: any, endpoint?: any, method?: any): any;
    sendThreadRequest(body: any, method: any): any;
    sendProfileRequest(body: any, method?: any): any;
    sendTypingIndicator(recipientId: any, milliseconds: any): Promise<{}>;
    getUserProfile(userId: any): any;
    setGreetingText(text: any): any;
    setGetStartedButton(action: any): any;
    deleteGetStartedButton(): any;
    setPersistentMenu(buttons: any, disableInput: any): any;
    deletePersistentMenu(): any;
    say(recipientId: any, message: any, options: any): any;
    hear(keywords: any, callback: any): this;
    module(factory: any): any;
    conversation(recipientId: any, factory: any): void | Conversation;
    _formatButtons(buttons: any): any;
    _formatQuickReplies(quickReplies: any): any;
    _handleEvent(type: any, event: any, data?: any): void;
    _handleMessageEvent(event: any): void;
    _handleAttachmentEvent(event: any): void;
    _handlePostbackEvent(event: any): void;
    _handleQuickReplyEvent(event: any): void;
    _handleConversationResponse(type: any, event: any): boolean;
    _createRecipient(recipient: any): any;
    _initWebhook(): void;
    handleFacebookData(data: any): void;
    _verifyRequestSignature(req: any, res: any, buf: any): void;
}