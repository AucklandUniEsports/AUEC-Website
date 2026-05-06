import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
    return (
        <div className="mt-36 ml-16">
            <h1 className="text-[100px] text-white font-['Syne'] font-medium leading-0.8 tracking-[1.2px] uppercase">
                Contact
            </h1>
            <h2 className="text-[48px] text-white font-['Syne'] font-medium leading-0.8 tracking-[1.2px]">
                Get In Touch
            </h2>
            <div className="grid grid-cols-3 lg:grid-cols-2 gap-12 mt-8">
                <div>
                    <p className="text-white text-lg mb-8">
                        Want to get in contact with us? Whether you have
                        questions, want to collaborate, or need any assisstance
                        with club matters, we’d love to hear from you! Fill out
                        the form below and we’ll get back to you as soon as
                        possible.
                    </p>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
