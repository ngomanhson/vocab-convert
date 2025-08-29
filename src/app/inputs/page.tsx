import Input from "@/components/common/Input";
import { ArrowDownIcon, HeartIcon } from "@/components/Icons";

export default function InputPage() {
    return (
        <div className="h-screen bg-white p-8">
            <div className="max-w-[500px] mx-auto">
                <div className="grid grid-cols-2 gap-4 mb-5">
                    <Input name="text" inputSize="sm" leftIcon={<HeartIcon />} />
                    <Input name="text2" inputSize="sm" rightIcon={<ArrowDownIcon />} />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-5">
                    <Input name="text" leftIcon={<HeartIcon />} />
                    <Input name="text2" rightIcon={<ArrowDownIcon />} />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-5">
                    <Input name="text" inputSize="lg" leftIcon={<HeartIcon />} />
                    <Input name="text2" inputSize="lg" rightIcon={<ArrowDownIcon />} />
                </div>


                <div className="grid grid-cols-2 gap-4 mb-5">
                    <Input name="text" inputSize="lg" disabled />
                    <Input name="text2" inputSize="md" disabled />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-5">
                    <Input name="text" inputSize="lg" disabled leftIcon={<HeartIcon />} />
                    <Input name="text2" inputSize="md" disabled rightIcon={<ArrowDownIcon />} />
                </div>
            </div>
        </div>
    )
}