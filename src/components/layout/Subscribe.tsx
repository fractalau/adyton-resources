const Subscribe = () => (
  <section className="bg-gold py-6">
    <div className="container">
      <div id="mc_embed_signup" className="w-full text-white">
        <div>
          <h3 className="text-xl md:text-2xl font-display font-bold mb-3 text-center">Stay Informed</h3>
        </div>
        <form
          action="https://adytonresources.us17.list-manage.com/subscribe/post?u=af02f6790cb18dbf0bf6159a6&id=61ec236b80&f_id=0059c2e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
          className="flex flex-col md:flex-row md:items-end gap-4"
        >
          <h2 className="sr-only">Subscribe for News Updates</h2>

          <div className="flex flex-col flex-1">
            <label htmlFor="mce-FNAME" className="font-semibold mb-1 text-white">
              First Name
            </label>
            <input
              type="text"
              name="FNAME"
              id="mce-FNAME"
              className="p-1 border border-input rounded-md text-base bg-white text-[#1b4e6a]"
            />
          </div>

          <div className="flex flex-col flex-1">
            <label htmlFor="mce-LNAME" className="font-semibold mb-1 text-white">
              Last Name
            </label>
            <input
              type="text"
              name="LNAME"
              id="mce-LNAME"
              className="p-1 border border-input rounded-md text-base bg-white text-[#1b4e6a]"
            />
          </div>

          <div className="flex flex-col flex-1">
            <label htmlFor="mce-EMAIL" className="font-semibold mb-1 text-white">
              Email Address <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              required
              className="p-1 border border-input rounded-md text-base bg-white text-[#1b4e6a]"
            />
          </div>

          <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
            <input type="text" name="b_af02f6790cb18dbf0bf6159a6_61ec236b80" tabIndex={-1} defaultValue="" />
          </div>

          <div className="flex md:shrink-0">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="cursor-pointer py-1 px-3 rounded-md text-base font-semibold text-white w-full md:w-auto"
              style={{ backgroundColor: "#1b4e6a" }}
            />
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default Subscribe;
