import { MessageSquare } from "lucide-react";
import { useState } from "react";

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    });
    const {signup, isSigningup} = useAuthStore();
    const validateForm = () => {}
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="min-h-screen grid lg:gid-cols-2">
            <div className="flex flex-col items-center gap-2 group">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bh-primary/20 transition-colors">
                    <MessageSquare className="size-6 text-primary"></MessageSquare>
                </div>
            </div>

        </div>
    );
}
