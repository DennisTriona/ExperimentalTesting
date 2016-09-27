module app.nothing.interfaces {
    
    export interface IEvent<TSender, TArgs> {

        subscribe(fn: (sender: TSender, args: TArgs) => void): void;

        unsubscribe(fn: (sender: TSender, args: TArgs) => void): void;
    }
}