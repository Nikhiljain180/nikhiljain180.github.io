(function () {
  var P = window.PROFILE;
  if (!P) return;

  var esc = function (s) {
    var d = document.createElement("div");
    d.textContent = s == null ? "" : String(s);
    return d.innerHTML;
  };

  var ICON = {
    shield:
      '<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    search:
      '<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',
    chart:
      '<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    agents:
      '<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="7" r="3"/><circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M12 10v3M9 14l-2 1M15 14l2 1"/></svg>',
  };

  var githubSvg =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>';
  var externalSvg =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';

  var emailSvg =
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>';
  var linkedinSvg =
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>';
  var phoneSvg =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';

  document.title = P.meta.siteTitle;
  var meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", P.meta.ogDescription);

  var nav = document.getElementById("nav-list");
  if (nav) {
    nav.innerHTML = P.nav
      .map(function (item) {
        return "<li><a href=\"" + esc(item.href) + "\">" + esc(item.label) + "</a></li>";
      })
      .join("");
  }

  var logo = document.getElementById("nav-logo");
  if (logo) {
    logo.innerHTML = esc(P.hero.initials || "") + "<span>.</span>";
  }

  var setHtml = function (id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };
  var setText = function (id, text) {
    var el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  var heroPhoto = document.getElementById("hero-photo");
  if (heroPhoto) {
    if (P.hero.photoUrl) {
      heroPhoto.src = P.hero.photoUrl;
      heroPhoto.alt = P.hero.photoAlt || P.hero.name || "Profile photo";
      heroPhoto.hidden = false;
    } else {
      heroPhoto.removeAttribute("src");
      heroPhoto.hidden = true;
    }
  }

  setText("hero-badge", P.hero.role || "");

  var h1 = document.getElementById("hero-heading");
  if (h1) {
    var parts = P.hero.nameParts;
    if (parts && parts.length >= 2) {
      h1.innerHTML =
        esc(parts[0]) + ' <span class="accent">' + esc(parts.slice(1).join(" ")) + "</span>";
    } else if (P.hero.name) {
      h1.textContent = P.hero.name;
    } else {
      h1.textContent = (parts && parts[0]) || "";
    }
  }

  setText("hero-subtext", P.hero.subtext);

  var primary = document.getElementById("cta-primary");
  var secondary = document.getElementById("cta-secondary");
  setText("cta-primary-label", P.hero.primaryCta.label);
  setText("cta-secondary-label", P.hero.secondaryCta.label);
  if (primary) primary.href = P.hero.primaryCta.href;
  if (secondary) secondary.href = P.hero.secondaryCta.href;

  setText("projects-label", P.projectsSectionTitle);
  setText("projects-section-title", P.projectsSectionLead);
  setText("projects-intro", P.projectsIntro);

  setText("about-lead-title", P.about.sectionLead);
  setHtml(
    "about-body",
    P.about.paragraphs
      .map(function (p) {
        var t = (p || "").trim();
        if (t.indexOf("<ul") === 0 || t.indexOf("<ol") === 0) return p;
        return "<p>" + p + "</p>";
      })
      .join("")
  );

  var tags = document.getElementById("skill-tags");
  if (tags) {
    tags.innerHTML = P.about.skillTags
      .map(function (t) {
        return '<span class="tech-tag">' + esc(t) + "</span>";
      })
      .join("");
  }

  var hg = document.getElementById("highlight-grid");
  if (hg) {
    hg.innerHTML = P.highlights
      .map(function (h) {
        return (
          '<div class="highlight-card">' +
          '<div class="label">' +
          esc(h.label) +
          "</div>" +
          '<div class="value">' +
          esc(h.value) +
          "</div>" +
          '<div class="desc">' +
          esc(h.desc) +
          "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  function statusClass(s) {
    if (s === "live") return "status-live";
    if (s === "coming-soon") return "status-soon";
    if (s === "in-progress") return "status-progress";
    return "";
  }

  function statusLabel(s) {
    if (s === "live") return "Live";
    if (s === "in-progress") return "In Development";
    if (s === "coming-soon") return "Coming Soon";
    return s;
  }

  function projectIconSvg(key) {
    return ICON[key] || ICON.shield;
  }

  var pg = document.getElementById("project-grid");
  if (pg) {
    pg.innerHTML = P.projects
      .map(function (proj) {
        var badge = proj.badge || statusLabel(proj.status);
        var iconKey = proj.icon || "shield";
        var links = (proj.links || [])
          .map(function (l) {
            var lower = (l.label || "").toLowerCase();
            var svg = lower.indexOf("github") !== -1 ? githubSvg : externalSvg;
            return (
              '<a href="' +
              esc(l.url) +
              '" target="_blank" rel="noopener noreferrer">' +
              svg +
              esc(l.label) +
              "</a>"
            );
          })
          .join("");
        var tagSpans = (proj.tags || [])
          .map(function (t) {
            return "<span>" + esc(t) + "</span>";
          })
          .join("");
        return (
          '<article class="project-card fade-in">' +
          '<div class="project-icon">' +
          projectIconSvg(iconKey) +
          "</div>" +
          '<div class="project-status ' +
          statusClass(proj.status) +
          '"><span class="status-dot"></span> ' +
          esc(badge) +
          "</div>" +
          "<h3>" +
          esc(proj.name) +
          "</h3>" +
          "<p>" +
          esc(proj.description) +
          "</p>" +
          '<div class="project-tags">' +
          tagSpans +
          "</div>" +
          '<div class="project-links">' +
          links +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  if (P.writing.sectionLabel) setText("writing-label", P.writing.sectionLabel);

  var series = P.writing.series;
  var wb = document.getElementById("writing-items");
  if (wb && series && series.topics && series.topics.length) {
    var topicsHtml = series.topics
      .map(function (t) {
        var row =
          '<div class="blog-row">Blog (~10k words): ' +
          t.blogLinks
            .map(function (bl, i) {
              return (
                (i ? " · " : "") +
                '<a href="' +
                esc(bl.href) +
                '" target="_blank" rel="noopener noreferrer">' +
                esc(bl.text) +
                "</a>"
              );
            })
            .join("") +
          "</div>";
        return (
          "<li>" +
          row +
          '<a class="lesson" href="' +
          esc(t.lesson.href) +
          '" target="_blank" rel="noopener noreferrer">' +
          esc(t.lesson.text) +
          "</a>" +
          '<p class="teach">' +
          esc(t.teach) +
          "</p>" +
          '<a class="export" href="' +
          esc(t.exportUrl) +
          '" target="_blank" rel="noopener noreferrer">Notebook HTML export →</a>' +
          '<a class="github" href="' +
          esc(t.githubUrl) +
          '" target="_blank" rel="noopener noreferrer">Run on GitHub →</a>' +
          "</li>"
        );
      })
      .join("");

    wb.innerHTML =
      '<div class="ai-series-docs">' +
      '<div class="ai-series-docs-inner">' +
      '<h2 class="ai-series-docs-title">' +
      esc(series.title) +
      "</h2>" +
      '<p class="kicker">' +
      esc(series.kicker) +
      "</p>" +
      '<p class="sub">' +
      series.subHtml +
      "</p>" +
      '<ol class="topics">' +
      topicsHtml +
      "</ol>" +
      "</div></div>";

    var wsec = document.getElementById("writing-section");
    if (wsec) wsec.classList.add("has-ai-series-docs");
  } else if (wb) {
    wb.innerHTML = "";
  }

  setText("contact-title", P.contact.title);
  setText("contact-blurb", P.contact.blurb);

  var resumeWrap = document.getElementById("resume-wrapper");
  var resumeBtn = document.getElementById("resume-btn");
  if (P.contact.resumeUrl && resumeWrap && resumeBtn) {
    resumeBtn.href = P.contact.resumeUrl;
    resumeWrap.hidden = false;
    setText("resume-btn-label", P.contact.resumeLabel || "Download Resume");
  } else if (resumeWrap) {
    resumeWrap.hidden = true;
  }

  function contactRow(svg, href, lineLabel, lineValue, external) {
    var rel = external ? ' rel="noopener noreferrer"' : "";
    var tgt = external ? ' target="_blank"' : "";
    return (
      '<a href="' +
      esc(href) +
      '"' +
      tgt +
      rel +
      ' class="contact-link">' +
      svg +
      "<div><div class=\"link-label\">" +
      esc(lineLabel) +
      '</div><div class="link-value">' +
      esc(lineValue) +
      "</div></div></a>"
    );
  }

  var cl = document.getElementById("contact-links");
  if (cl) {
    var rows = [];
    if (P.contact.email) {
      rows.push(
        contactRow(
          emailSvg,
          "mailto:" + P.contact.email,
          "Email",
          P.contact.email,
          false
        )
      );
    }
    if (P.contact.phone) {
      var telHref = P.contact.phoneTel || "tel:" + String(P.contact.phone).replace(/[^\d+]/g, "");
      rows.push(
        contactRow(phoneSvg, telHref, "Phone", P.contact.phone, false)
      );
    }
    if (P.contact.linkedin) {
      rows.push(
        contactRow(
          linkedinSvg,
          P.contact.linkedin.url,
          P.contact.linkedin.label,
          P.contact.linkedin.value || "",
          true
        )
      );
    }
    if (P.contact.githubPersonal) {
      rows.push(
        contactRow(
          githubSvg,
          P.contact.githubPersonal.url,
          P.contact.githubPersonal.label,
          P.contact.githubPersonal.value || P.contact.githubPersonal.handle || "",
          true
        )
      );
    }
    if (P.contact.githubOrg) {
      rows.push(
        contactRow(
          githubSvg,
          P.contact.githubOrg.url,
          P.contact.githubOrg.label,
          P.contact.githubOrg.value || "",
          true
        )
      );
    }
    cl.innerHTML = rows.join("");
  }

  var footerText = document.getElementById("footer-copy");
  if (footerText) {
    footerText.innerHTML =
      "&copy; " +
      esc(String(P.footer.year)) +
      " " +
      esc(P.footer.name) +
      ". " +
      esc(P.footer.tagline);
  }

  var linkedinFill =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>';
  var githubFill =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>';
  var emailFill =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>';

  var fs = document.getElementById("footer-socials");
  if (fs) {
    var socials = [];
    if (P.contact.linkedin && P.contact.linkedin.url) {
      socials.push(
        '<a href="' +
          esc(P.contact.linkedin.url) +
          '" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">' +
          linkedinFill +
          "</a>"
      );
    }
    if (P.contact.githubPersonal && P.contact.githubPersonal.url) {
      socials.push(
        '<a href="' +
          esc(P.contact.githubPersonal.url) +
          '" target="_blank" rel="noopener noreferrer" aria-label="GitHub">' +
          githubFill +
          "</a>"
      );
    }
    if (P.contact.githubOrg && P.contact.githubOrg.url) {
      socials.push(
        '<a href="' +
          esc(P.contact.githubOrg.url) +
          '" target="_blank" rel="noopener noreferrer" aria-label="GitHub organization">' +
          githubFill +
          "</a>"
      );
    }
    if (P.contact.email) {
      socials.push(
        '<a href="mailto:' + esc(P.contact.email) + '" aria-label="Email">' + emailFill + "</a>"
      );
    }
    fs.innerHTML = socials.join("");
  }
})();
