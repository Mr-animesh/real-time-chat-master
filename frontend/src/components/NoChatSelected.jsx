import { Coffee } from "lucide-react";

export default function NoChatSelected() {
    return (
        <div className="w-full flex flex-1 flex-col items-center justfy-center p-16 bg-base-100/50">
            <div className="max-w-md text-center space-y-8">
                <div className="flex justify-center gap-4 mb-4">
                    <div className="relative">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center animate-bounce">
                        <Coffee className="w-8 h-8 text-primary" />
                        </div>
                    </div>
                </div>
                <h2 className="text-2xl font-bold">Welcome To Tea</h2>
                <p className="text-base-content/60">
                Select a victim from the sidebar to start bitching
                </p>
            </div>
        </div>
    )
}