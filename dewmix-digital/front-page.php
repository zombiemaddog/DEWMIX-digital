<?php
/**
 * Front page template for the DEWMIX Digital theme.
 *
 * @package DEWMIX_Digital
 */

get_header();
?>

<main id="main">
  <section class="hero" id="top">
    <div class="hero-brand-wash" aria-hidden="true">
      <img src="<?php echo esc_url( dewmix_digital_shared_asset_uri( 'office-bg.png' ) ); ?>" width="1536" height="1024" alt="" />
    </div>
    <div class="container hero-grid">
      <div class="hero-copy">
        <p class="eyebrow" data-i18n="Germany-backed full IT solutions">Germany-backed full IT solutions</p>
        <h1 data-i18n="Websites, IT systems, AI, and digital content from one accountable team.">Websites, IT systems, AI, and digital content from one accountable team.</h1>
        <p class="hero-lede" data-i18n="DEWMIX Digital helps businesses replace scattered vendors, unreliable tech, weak online presence, and manual admin with a secure, polished digital operation.">
          DEWMIX Digital helps businesses replace scattered vendors, unreliable tech, weak online presence, and
          manual admin with a secure, polished digital operation.
        </p>
        <ul class="hero-bullets" aria-label="DEWMIX delivery strengths">
          <li data-i18n="Germany-backed delivery standards">Germany-backed delivery standards</li>
          <li data-i18n="Websites, IT, AI, media, and support under one roof">Websites, IT, AI, media, and support under one roof</li>
          <li data-i18n="Built for businesses that need things to work, not just look good">Built for businesses that need things to work, not just look good</li>
        </ul>
        <div class="hero-actions" aria-label="Primary actions">
          <a class="button primary" href="#contact" data-i18n="Start a project">Start a project</a>
          <a class="button secondary" href="#services" data-i18n="Explore services">Explore services</a>
        </div>
      </div>

      <aside class="delivery-panel" aria-label="DEWMIX delivery stack">
        <figure class="panel-art hero-art" aria-label="DEWMIX connected operations visual">
          <img src="<?php echo esc_url( dewmix_digital_shared_asset_uri( '3d-server-room.png' ) ); ?>" width="1536" height="1024" alt="DEWMIX server room with secured infrastructure and operations monitoring" />
        </figure>
        <div class="panel-top">
          <img src="<?php echo esc_url( dewmix_digital_shared_asset_uri( 'dewmix-logo.png' ) ); ?>" width="1100" height="228" alt="DEWMIX Digital" />
          <span class="status-pill stable" data-i18n="Operational partner">Operational partner</span>
        </div>
        <div class="stack-layers compact">
          <div><span>01</span><strong data-i18n="Presence">Presence</strong><small data-i18n="Website, brand, content, search basics">Website, brand, content, search basics</small></div>
          <div><span>02</span><strong data-i18n="Infrastructure">Infrastructure</strong><small data-i18n="Devices, email, domains, networks">Devices, email, domains, networks</small></div>
          <div><span>03</span><strong data-i18n="Automation">Automation</strong><small data-i18n="AI assistants, workflows, admin reduction">AI assistants, workflows, admin reduction</small></div>
          <div><span>04</span><strong data-i18n="Protection">Protection</strong><small data-i18n="Security, backup, access, data hygiene">Security, backup, access, data hygiene</small></div>
          <div><span>05</span><strong data-i18n="Support">Support</strong><small data-i18n="Monitoring, maintenance, improvements">Monitoring, maintenance, improvements</small></div>
        </div>
        <div class="panel-status" aria-label="System status examples">
          <span data-i18n="Website live"><i></i> Website live</span>
          <span data-i18n="Backups planned"><i></i> Backups planned</span>
          <span data-i18n="Alerts visible"><i></i> Alerts visible</span>
        </div>
      </aside>
    </div>
  </section>

  <section class="proof-strip" aria-label="DEWMIX operating focus">
    <div class="container proof-grid">
      <span data-i18n="Bars">Bars</span>
      <span data-i18n="Restaurants">Restaurants</span>
      <span data-i18n="Hotels">Hotels</span>
      <span data-i18n="Retail">Retail</span>
      <span data-i18n="Small business">Small business</span>
      <span data-i18n="Startups">Startups</span>
      <span data-i18n="Property management">Property management</span>
      <span data-i18n="Professional services">Professional services</span>
    </div>
  </section>

  <section class="section problems-section" id="problems">
    <figure class="problem-atmosphere" aria-hidden="true">
      <img src="<?php echo esc_url( dewmix_digital_shared_asset_uri( 'tan-bg.png' ) ); ?>" width="1536" height="1024" alt="" loading="lazy" />
    </figure>
    <div class="container problem-story-grid">
      <div class="section-heading sticky-heading">
        <p class="eyebrow" data-i18n="The messy middle">The messy middle</p>
        <h2 data-i18n="DEWMIX turns disconnected daily chaos into an operation people can trust.">DEWMIX turns disconnected daily chaos into an operation people can trust.</h2>
        <p data-i18n="Most businesses do not have one problem. They have a chain reaction: the website is weak, accounts are scattered, staff share information in chats, backups are unclear, and nobody owns the full picture.">
          Most businesses do not have one problem. They have a chain reaction: the website is weak, accounts are
          scattered, staff share information in chats, backups are unclear, and nobody owns the full picture.
        </p>
      </div>
      <div class="before-after-panel" aria-label="Before and after transformation examples">
        <div class="transformation-column before">
          <span data-i18n="Before DEWMIX">Before DEWMIX</span>
          <ul>
            <li data-i18n="WhatsApp chaos and repeated customer questions">WhatsApp chaos and repeated customer questions</li>
            <li data-i18n="Outdated website with unclear calls to action">Outdated website with unclear calls to action</li>
            <li data-i18n="Random suppliers, logins, domains, and devices">Random suppliers, logins, domains, and devices</li>
            <li data-i18n="No visible backup, monitoring, or handover process">No visible backup, monitoring, or handover process</li>
          </ul>
        </div>
        <div class="transformation-arrow" aria-hidden="true">→</div>
        <div class="transformation-column after">
          <span data-i18n="After DEWMIX">After DEWMIX</span>
          <ul>
            <li data-i18n="Organised systems, documented access, and clean ownership">Organised systems, documented access, and clean ownership</li>
            <li data-i18n="Premium website, content, and conversion-ready journeys">Premium website, content, and conversion-ready journeys</li>
            <li data-i18n="Practical AI workflows for enquiries and admin follow-up">Practical AI workflows for enquiries and admin follow-up</li>
            <li data-i18n="Support process, monitoring visibility, and recovery planning">Support process, monitoring visibility, and recovery planning</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="section services-section" id="services">
    <div class="container">
      <div class="section-heading wide">
        <p class="eyebrow" data-i18n="Capabilities">Capabilities</p>
        <h2 data-i18n="One accountable team across the parts that normally get split apart.">One accountable team across the parts that normally get split apart.</h2>
        <p data-i18n="Each capability has a job in the story: attract customers, run the business, protect the operation, reduce manual work, and keep improving after launch.">
          Each capability has a job in the story: attract customers, run the business, protect the operation, reduce
          manual work, and keep improving after launch.
        </p>
      </div>
      <div class="service-grid focused">
        <article class="service-card">
          <span class="service-tag" data-i18n="ATTRACT">ATTRACT</span>
          <h3 data-i18n="Websites, apps, and content">Websites, apps, and content</h3>
          <p data-i18n="Premium pages, landing journeys, booking or quote flows, local search basics, social assets, flyers, video, animation, and sound.">Premium pages, landing journeys, booking or quote flows, local search basics, social assets, flyers, video, animation, and sound.</p>
        </article>
        <article class="service-card secure">
          <span class="service-tag" data-i18n="OPERATE">OPERATE</span>
          <h3 data-i18n="Business IT foundations">Business IT foundations</h3>
          <p data-i18n="Devices, domains, email, cloud storage, network setup, access cleanup, documentation, handover notes, and supplier consolidation.">Devices, domains, email, cloud storage, network setup, access cleanup, documentation, handover notes, and supplier consolidation.</p>
        </article>
        <article class="service-card automate">
          <span class="service-tag" data-i18n="AUTOMATE">AUTOMATE</span>
          <h3 data-i18n="AI workflows and admin relief">AI workflows and admin relief</h3>
          <p data-i18n="Customer-service assistants, FAQ flows, lead routing, reminders, staff workflows, internal knowledge, and controlled human handover.">Customer-service assistants, FAQ flows, lead routing, reminders, staff workflows, internal knowledge, and controlled human handover.</p>
        </article>
        <article class="service-card media">
          <span class="service-tag" data-i18n="PROTECT">PROTECT</span>
          <h3 data-i18n="Security, backup, and support">Security, backup, and support</h3>
          <p data-i18n="Risk cleanup, permissions, backup planning, monitoring visibility, maintenance routines, escalation paths, and ongoing improvements.">Risk cleanup, permissions, backup planning, monitoring visibility, maintenance routines, escalation paths, and ongoing improvements.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="section stack-section" id="stack">
    <div class="container ecosystem-grid">
      <div class="ecosystem-copy">
        <p class="eyebrow" data-i18n="Technology ecosystem">Technology ecosystem</p>
        <h2 data-i18n="The strongest results happen when the website, systems, automation, content, and support are designed together.">The strongest results happen when the website, systems, automation, content, and support are designed together.</h2>
        <p data-i18n="DEWMIX uses the technology map as a planning tool, not decoration. It shows how every customer touchpoint connects to the infrastructure behind it and the support process that keeps it dependable.">
          DEWMIX uses the technology map as a planning tool, not decoration. It shows how every customer touchpoint
          connects to the infrastructure behind it and the support process that keeps it dependable.
        </p>
        <div class="ecosystem-legend" aria-label="Connected ecosystem layers">
          <span data-i18n="Websites">Websites</span>
          <span data-i18n="Networking">Networking</span>
          <span data-i18n="Security">Security</span>
          <span data-i18n="Cloud">Cloud</span>
          <span data-i18n="Automation">Automation</span>
          <span data-i18n="Content">Content</span>
          <span data-i18n="Support">Support</span>
        </div>
      </div>
      <div class="ecosystem-stage">
        <figure class="ecosystem-art" aria-hidden="true">
          <img src="<?php echo esc_url( dewmix_digital_shared_asset_uri( 'server0-internal.png' ) ); ?>" width="1536" height="1024" alt="" loading="lazy" />
        </figure>
        <article class="ecosystem-node node-web"><span>01</span><strong data-i18n="Front door">Front door</strong><small data-i18n="Website, content, booking, quote, and lead capture.">Website, content, booking, quote, and lead capture.</small></article>
        <article class="ecosystem-node node-core"><span>02</span><strong data-i18n="Operating core">Operating core</strong><small data-i18n="Email, devices, cloud, files, access, and network.">Email, devices, cloud, files, access, and network.</small></article>
        <article class="ecosystem-node node-ai"><span>03</span><strong data-i18n="Automation layer">Automation layer</strong><small data-i18n="AI assistants, follow-up, FAQs, routing, and admin relief.">AI assistants, follow-up, FAQs, routing, and admin relief.</small></article>
        <article class="ecosystem-node node-guard"><span>04</span><strong data-i18n="Control room">Control room</strong><small data-i18n="Security, backups, monitoring, reporting, and support.">Security, backups, monitoring, reporting, and support.</small></article>
      </div>
    </div>
  </section>

  <section class="section process-section" id="process">
    <div class="container section-grid">
      <div class="section-heading sticky-heading">
        <p class="eyebrow" data-i18n="Directed delivery">Directed delivery</p>
        <h2 data-i18n="A clear path from problem to controlled launch.">A clear path from problem to controlled launch.</h2>
        <p data-i18n="DEWMIX avoids the usual supplier handoff by making discovery, build, launch, and support part of one managed journey.">DEWMIX avoids the usual supplier handoff by making discovery, build, launch, and support part of one managed journey.</p>
      </div>
      <ol class="process-list narrative-list">
        <li><span>01</span><div><h3 data-i18n="Find the friction">Find the friction</h3><p data-i18n="We identify what is costing time, trust, sales, or operational confidence.">We identify what is costing time, trust, sales, or operational confidence.</p></div></li>
        <li><span>02</span><div><h3 data-i18n="Prioritise the first win">Prioritise the first win</h3><p data-i18n="We separate urgent fixes from nice-to-have ideas so progress starts without creating new risk.">We separate urgent fixes from nice-to-have ideas so progress starts without creating new risk.</p></div></li>
        <li><span>03</span><div><h3 data-i18n="Build the connected layer">Build the connected layer</h3><p data-i18n="We design and configure the website, IT, automation, content, and protection pieces that belong together.">We design and configure the website, IT, automation, content, and protection pieces that belong together.</p></div></li>
        <li><span>04</span><div><h3 data-i18n="Document the handover">Document the handover</h3><p data-i18n="We leave the business with cleaner ownership, clearer access, practical notes, and fewer mysteries.">We leave the business with cleaner ownership, clearer access, practical notes, and fewer mysteries.</p></div></li>
        <li><span>05</span><div><h3 data-i18n="Support the evolution">Support the evolution</h3><p data-i18n="We keep the system visible, maintained, and ready for the next improvement.">We keep the system visible, maintained, and ready for the next improvement.</p></div></li>
      </ol>
    </div>
  </section>

  <section class="section work-section" id="work">
    <div class="container">
      <div class="section-heading wide">
        <p class="eyebrow" data-i18n="Real-world scenarios">Real-world scenarios</p>
        <h2 data-i18n="Concrete outcomes for businesses that need more than advice.">Concrete outcomes for businesses that need more than advice.</h2>
      </div>
      <figure class="collaboration-visual" aria-label="DEWMIX collaboration across Thailand, Germany, and the United Kingdom">
        <img src="<?php echo esc_url( dewmix_digital_shared_asset_uri( '3d-3-flags.png' ) ); ?>" width="1402" height="1122" alt="DEWMIX collaboration wall showing Thailand, Germany, and United Kingdom flags" loading="lazy" />
        <figcaption data-i18n="Thailand agility, German engineering standards, and UK software perspective working as one delivery model.">Thailand agility, German engineering standards, and UK software perspective working as one delivery model.</figcaption>
      </figure>
      <div class="scenario-grid">
        <article>
          <span data-i18n="New bar opening">New bar opening</span>
          <h3 data-i18n="Launch the venue with a digital foundation already in place.">Launch the venue with a digital foundation already in place.</h3>
          <p data-i18n="DEWMIX builds the launch website, menu or booking journey, Google-ready basics, staff email, Wi-Fi/network setup, opening content, and a support handover.">DEWMIX builds the launch website, menu or booking journey, Google-ready basics, staff email, Wi-Fi/network setup, opening content, and a support handover.</p>
        </article>
        <article>
          <span data-i18n="Existing business rescue">Existing business rescue</span>
          <h3 data-i18n="Stabilise a messy setup without stopping daily operations.">Stabilise a messy setup without stopping daily operations.</h3>
          <p data-i18n="We clean domains, accounts, access, files, backups, outdated pages, supplier confusion, and documentation so the business can move forward safely.">We clean domains, accounts, access, files, backups, outdated pages, supplier confusion, and documentation so the business can move forward safely.</p>
        </article>
        <article>
          <span data-i18n="AI automation deployment">AI automation deployment</span>
          <h3 data-i18n="Reduce repeated work while keeping people in control.">Reduce repeated work while keeping people in control.</h3>
          <p data-i18n="We map enquiries, FAQs, follow-ups, internal reminders, lead routing, and human handover so automation improves service instead of creating noise.">We map enquiries, FAQs, follow-ups, internal reminders, lead routing, and human handover so automation improves service instead of creating noise.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="section about-section" id="about">
    <div class="container about-grid">
      <div>
        <p class="eyebrow" data-i18n="Why it works">Why it works</p>
        <h2 data-i18n="Premium execution is not about adding more tools. It is about making the whole system feel intentional.">Premium execution is not about adding more tools. It is about making the whole system feel intentional.</h2>
      </div>
      <div class="about-copy">
        <p data-i18n="DEWMIX Digital is built for owners and teams who want a dependable online presence and a calmer technology base without managing a long list of separate suppliers. We combine brand-aware design, practical IT, secure setup, AI automation, media production, and ongoing support into one accountable service.">
          DEWMIX Digital is built for owners and teams who want a dependable online presence and a calmer technology
          base without managing a long list of separate suppliers. We combine brand-aware design, practical IT,
          secure setup, AI automation, media production, and ongoing support into one accountable service.
        </p>
        <figure class="trust-visual brand-watermark-card" aria-hidden="true">
          <img src="<?php echo esc_url( dewmix_digital_shared_asset_uri( 'office-bg.png' ) ); ?>" width="1536" height="1024" alt="" loading="lazy" />
        </figure>
        <div class="about-points">
          <span data-i18n="Clear ownership">Clear ownership</span>
          <span data-i18n="Secure foundations">Secure foundations</span>
          <span data-i18n="Practical automation">Practical automation</span>
          <span data-i18n="Long-term support">Long-term support</span>
          <span data-i18n="Content that matches the system">Content that matches the system</span>
        </div>
      </div>
    </div>
  </section>

  <section class="section contact-section" id="contact">
    <div class="container contact-grid">
      <div class="contact-copy">
        <p class="eyebrow" data-i18n="Contact">Contact</p>
        <h2 data-i18n="Tell DEWMIX what needs to look better, work better, or scale better.">Tell DEWMIX what needs to look better, work better, or scale better.</h2>
        <p data-i18n="Share the part of the operation that feels weak, messy, outdated, or risky. DEWMIX can help scope a focused first step without asking for private credentials through this form.">
          Share the part of the operation that feels weak, messy, outdated, or risky. DEWMIX can help scope a focused
          first step without asking for private credentials through this form.
        </p>
        <div class="contact-meta">
          <span data-i18n="Website / online presence">Website / online presence</span>
          <span data-i18n="IT setup / network">IT setup / network</span>
          <span data-i18n="AI / automation">AI / automation</span>
          <span data-i18n="Security / backup / monitoring">Security / backup / monitoring</span>
          <span data-i18n="Media / content">Media / content</span>
        </div>
      </div>
      <form class="contact-form" data-quote-form>
        <label data-i18n="Name">
          Name
          <input type="text" name="name" autocomplete="name" required />
        </label>
        <label data-i18n="Email">
          Email
          <input type="email" name="email" autocomplete="email" required />
        </label>
        <label data-i18n="Organisation">
          Organisation
          <input type="text" name="organisation" autocomplete="organization" />
        </label>
        <label data-i18n="Project focus">
          Project focus
          <select name="project_focus" required>
            <option value="" data-i18n="Select a focus">Select a focus</option>
            <option data-i18n="Website / online presence">Website / online presence</option>
            <option data-i18n="IT setup / network">IT setup / network</option>
            <option data-i18n="AI / automation">AI / automation</option>
            <option data-i18n="Security / backup / monitoring">Security / backup / monitoring</option>
            <option data-i18n="Media / content">Media / content</option>
            <option data-i18n="Not sure yet">Not sure yet</option>
          </select>
        </label>
        <label data-i18n="What needs fixing?">
          What needs fixing?
          <textarea name="message" rows="5" required></textarea>
        </label>
        <button class="button primary" type="submit" data-i18n="Send consultation request">Send consultation request</button>
        <p class="form-note" data-form-notice data-i18n="Do not send passwords or private credentials through this form.">Do not send passwords or private credentials through this form.</p>
      </form>
    </div>
  </section>
</main>

<?php
get_footer();
