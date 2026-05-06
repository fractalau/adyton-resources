const Subscribe = () => (
  <section className="bg-gold py-12 md:py-16">
    <div className="container grid md:grid-cols-2 gap-10 items-center">
      <div className="text-left">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-3" style={{ color: "#1b4e6a" }}>
          Stay Informed
        </h2>
        <p className="font-body" style={{ color: "#1b4e6a" }}>
          Subscribe to receive Adyton Resources news releases and investor updates direct to your inbox.
        </p>
      </div>

      <div id="mc_embed_signup" className="w-full">
        <form
          action="https://adytonresources.us17.list-manage.com/subscribe/post?u=af02f6790cb18dbf0bf6159a6&id=61ec236b80&f_id=0059c2e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
          className="flex flex-col gap-4"
        >
          <h2 className="sr-only">Subscribe for News Updates</h2>

          <div className="flex flex-col">
            <label htmlFor="mce-FNAME" className="font-semibold mb-1" style={{ color: "#1b4e6a" }}>
              First Name
            </label>
            <input
              type="text"
              name="FNAME"
              id="mce-FNAME"
              className="px-3 py-2 border border-input rounded-md text-base bg-background text-foreground"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="mce-LNAME" className="font-semibold mb-1" style={{ color: "#1b4e6a" }}>
              Last Name
            </label>
            <input
              type="text"
              name="LNAME"
              id="mce-LNAME"
              className="px-3 py-2 border border-input rounded-md text-base bg-background text-foreground"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="mce-EMAIL" className="font-semibold mb-1" style={{ color: "#1b4e6a" }}>
              Email Address <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              required
              className="px-3 py-2 border border-input rounded-md text-base bg-background text-foreground"
            />
          </div>

          <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
            <input type="text" name="b_af02f6790cb18dbf0bf6159a6_61ec236b80" tabIndex={-1} defaultValue="" />
          </div>

          <div className="flex justify-end mt-2">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="cursor-pointer px-6 py-3 rounded-md text-base font-semibold text-gold"
              style={{ backgroundColor: "#1b4e6a" }}
            />
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default Subscribe;
