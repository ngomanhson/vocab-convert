import Button from "@/components/common/Button";
import HeartIcon from "@/components/Icons";

export default function ButtonsPage() {
    return (
        <div className="bg-white flex items-center justify-center gap-5">
            <Button size="sm" variant="primary">Button</Button>
            <Button size="md" variant="secondary">Button</Button>
            <Button leftIcon={<HeartIcon size="sm" />} size="sm" variant="secondary">Button</Button>
            <Button size="lg" variant="ghost">Button</Button>
        </div>
    )
}
