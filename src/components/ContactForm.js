import "../css/ContactForm.css"
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mqazqpyq");
  if (state.succeeded) {
      return <p>Thanks for reaching me, i will get back to you shortly!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className='form'>
      <h1 className="msg-contact" >Send Me a Message</h1>
      <div className="Div-input">
      <label htmlFor="fullname">
        Full Name
      </label>
      <input
        id="name"
        type="name" 
        name="fullname"
        placeholder='fullname'
        className="name"
        required
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      </div>

      <div className="Div-input">
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='email'
        className="email"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>
      
      <div className="Div-input">
      <label htmlFor="phone">
        Phone Number
      </label>
      <input
        id="phone"
        type="tel" 
        name="phone"
        placeholder='phone'
        className="tel"
        required
      />
      <ValidationError 
        prefix="tel" 
        field="tel"
        errors={state.errors}
      />
      </div>

      <div className="Div-input">
      <label htmlFor="Select">
        Messenger
      </label>
      <select
      id="select"
      type="select" 
      name="Messenger"
      className="messenger"
      required
      >
       <option value='Employer'>Employer</option>
       <option value='Client'>Client</option>
       <option value='Mentor'>Mentor</option>
       <option value='Referrer'>Referrer</option>
       <option value='Blogger'>Blogger</option>
       <option value='Students'>Student</option>
       <option value='Industry Peers'>Industry Peers</option>
       <option value='Collaborator'>Collaborator</option>
       <option value='Curious Browsers'>Curious Browser</option>
        </select>
      <ValidationError 
        prefix="Lastname" 
        field="name"
        errors={state.errors}
      />
      </div>

      <div className="Div-input">
      <p>Drop a message</p>
      <textarea
        id="message"
        name="message"
        placeholder='Comment'
        className="comment"
        required
      />
     
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>
      <button type="submit" disabled={state.submitting} className="btn">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;