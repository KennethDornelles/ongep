import { Button } from "@/components/ui/atomic/button"
import { Card, CardContent } from "@/components/ui/composed/card"

export default function ContactPage() {
    return (
        <div>
            <Card>
                <CardContent>
                    <h1>Contact Us</h1>
                    <Button>Submit</Button>
                </CardContent>
            </Card>
        </div>
    )
}