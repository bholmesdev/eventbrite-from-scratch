import { createForm } from "simple:form";
import { Form, Input } from "../../components/Form";
import { z } from "zod";

export const ticketForm = createForm({
  email: z.string().email(),
  quantity: z.number(),
  newsletter: z.boolean(),
});

export function TicketForm() {
  return (
    <>
      <Form validator={ticketForm.validator}>
        <label for="quantity">Quantity</label>
        <Input id="quantity" {...ticketForm.inputProps.quantity} />

        <label for="email">Email</label>
        <Input id="email" {...ticketForm.inputProps.email} />

        <div class="newsletter">
          <Input id="newsletter" {...ticketForm.inputProps.newsletter} />
          <label for="newsletter">Hear about the next event in your area</label>
        </div>
        <button>Buy tickets</button>
      </Form>
    </>
  );
}
