/* @ds-bundle: {"format":4,"namespace":"KontrakDesignSystem_5cbea0","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"LUCIDE_VERSION","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"GigCard","sourcePath":"components/marketplace/GigCard.jsx"},{"name":"Rating","sourcePath":"components/marketplace/Rating.jsx"},{"name":"StatTile","sourcePath":"components/marketplace/StatTile.jsx"},{"name":"Stepper","sourcePath":"components/navigation/Stepper.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"4e4feaadf6c5","components/core/Avatar.jsx":"b48df3b3396c","components/core/Badge.jsx":"48ac4abf5fd5","components/core/Button.jsx":"160e8b02e62d","components/core/Card.jsx":"b2f68996c8a1","components/core/Icon.jsx":"b7c9e2134845","components/core/IconButton.jsx":"98e6c34dba3f","components/core/Tag.jsx":"6085c783d741","components/feedback/Dialog.jsx":"4cff5883a40a","components/feedback/Toast.jsx":"23af77825ee9","components/feedback/Tooltip.jsx":"cd3282b1328d","components/forms/Checkbox.jsx":"a02062fd3017","components/forms/Field.jsx":"8ca0969b9fdc","components/forms/Input.jsx":"800d340bef70","components/forms/Radio.jsx":"22131476dc9b","components/forms/Select.jsx":"754045ae85f0","components/forms/Switch.jsx":"6b702f48f566","components/forms/Textarea.jsx":"752f50210016","components/marketplace/GigCard.jsx":"76f9943f0c53","components/marketplace/Rating.jsx":"632c27c7063d","components/marketplace/StatTile.jsx":"9b8f07498a16","components/navigation/Stepper.jsx":"38d5d7d1f18d","components/navigation/Tabs.jsx":"2b8c2940188d","export/kontrak-website/js/browse-work.jsx":"6ee030a3019a","export/kontrak-website/js/chrome.jsx":"8134455339fb","export/kontrak-website/js/for-clients.jsx":"5894383b1f20","export/kontrak-website/js/gig-detail.jsx":"fea6174de581","export/kontrak-website/js/home.jsx":"90b74a5ec6a2","export/kontrak-website/js/pricing.jsx":"295e92ad12d6","export/kontrak-website/js/sign-up.jsx":"a031825ea5c3","export/kontrak-website/js/visa-rules.jsx":"c5082ed1c56a","export/kontrak-website/lib/kontrak-ds.js":"570b535bdc5d","ui_kits/app/Briefs.jsx":"4cc0543eb4a7","ui_kits/app/ContractDetail.jsx":"69e8c95fc6ad","ui_kits/app/Dashboard.jsx":"0de9af225fad","ui_kits/app/Messages.jsx":"588a1e18b6c6","ui_kits/app/Shell.jsx":"fcbee7f738e5","ui_kits/website/BrowseWork.jsx":"6ee030a3019a","ui_kits/website/Chrome.jsx":"8134455339fb","ui_kits/website/ForClients.jsx":"5894383b1f20","ui_kits/website/GigDetail.jsx":"fea6174de581","ui_kits/website/Home.jsx":"90b74a5ec6a2","ui_kits/website/Pricing.jsx":"295e92ad12d6","ui_kits/website/SignUp.jsx":"a031825ea5c3","ui_kits/website/VisaRules.jsx":"c5082ed1c56a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KontrakDesignSystem_5cbea0 = window.KontrakDesignSystem_5cbea0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
const MARK = {
  navy: {
    bg: '#0D1B2A',
    arm: '#C8922A',
    upper: '#fff'
  },
  onNavy: {
    bg: 'rgba(255,255,255,0.08)',
    arm: '#E4B35A',
    upper: '#fff'
  },
  onGold: {
    bg: 'rgba(255,255,255,0.15)',
    arm: 'rgba(255,255,255,0.55)',
    upper: '#fff'
  }
};
function Logo({
  variant = 'lockup',
  tone = 'navy',
  size = 40,
  tagline = true,
  className,
  style
}) {
  const c = MARK[tone] || MARK.navy;
  const radius = size >= 64 ? 16 : size >= 32 ? 14 : 12;
  const mark = /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 72 72",
    fill: "none",
    "aria-hidden": "true",
    style: {
      flexShrink: 0,
      filter: tone === 'navy' && size >= 64 ? 'drop-shadow(var(--shadow-lift))' : undefined
    }
  }, /*#__PURE__*/React.createElement("rect", {
    width: "72",
    height: "72",
    rx: radius,
    fill: c.bg
  }), /*#__PURE__*/React.createElement("rect", {
    x: "18",
    y: "15",
    width: "6",
    height: "42",
    rx: "1",
    fill: c.upper
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "24,36 46,15 53,15 31,36",
    fill: c.upper
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "24,36 46,57 53,57 31,36",
    fill: c.arm
  }));
  if (variant === 'mark') return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: 'inline-flex',
      ...style
    },
    title: "Kontrak"
  }, mark);
  const wmColor = tone === 'navy' ? 'var(--ink)' : '#fff';
  const accent = tone === 'navy' ? 'var(--gold-600)' : tone === 'onNavy' ? 'var(--gold-400)' : 'rgba(255,255,255,0.7)';
  const tagColor = tone === 'navy' ? 'var(--text-faint)' : 'rgba(255,255,255,0.45)';
  const wmSize = Math.round(size * 0.5);
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: Math.round(size * 0.3),
      ...style
    }
  }, mark, variant === 'lockup' && size >= 56 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1.5,
      height: size * 0.72,
      background: 'var(--rule-fade)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: wmSize,
      letterSpacing: wmSize >= 30 ? 'var(--ls-wordmark)' : 'var(--ls-wordmark-sm)',
      lineHeight: 1,
      color: wmColor
    }
  }, "KONTR", /*#__PURE__*/React.createElement("span", {
    style: {
      color: accent
    }
  }, "AK")), tagline && size >= 40 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-micro)',
      letterSpacing: 'var(--ls-label-sm)',
      textTransform: 'uppercase',
      color: tagColor,
      paddingLeft: 2
    }
  }, "Work Legal \xB7 Work Smart")));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
const sizes = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 56,
  xl: 72
};
function Avatar({
  name = '',
  src,
  size = 'md',
  verified,
  style,
  className
}) {
  const d = sizes[size] || size;
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      position: 'relative',
      display: 'inline-flex',
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: d,
      height: d,
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--navy-800)',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: Math.max(9, Math.round(d * 0.36)),
      letterSpacing: '0.04em'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials), verified && /*#__PURE__*/React.createElement("span", {
    title: "Identity verified",
    style: {
      position: 'absolute',
      right: -2,
      bottom: -2,
      width: Math.max(10, d * 0.34),
      height: Math.max(10, d * 0.34),
      borderRadius: '50%',
      background: 'var(--gold-600)',
      border: '2px solid var(--surface-card)'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const tones = {
  neutral: {
    background: 'var(--parchment)',
    color: 'var(--text-muted)'
  },
  navy: {
    background: 'var(--navy-050)',
    color: 'var(--navy-700)'
  },
  gold: {
    background: 'var(--gold-100)',
    color: 'var(--gold-800)'
  },
  success: {
    background: 'var(--success-soft)',
    color: 'var(--success)'
  },
  warning: {
    background: 'var(--warning-soft)',
    color: 'var(--warning)'
  },
  danger: {
    background: 'var(--danger-soft)',
    color: 'var(--danger)'
  },
  solid: {
    background: 'var(--navy-900)',
    color: '#fff'
  }
};
function Badge({
  children,
  tone = 'neutral',
  dot,
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-micro-plus)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-label-xs)',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      ...tones[tone],
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'currentColor',
      opacity: 0.8
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  fontFamily: 'var(--font-body)',
  fontWeight: 'var(--fw-medium)',
  border: '1px solid transparent',
  borderRadius: 'var(--radius-md)',
  cursor: 'pointer',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'var(--transition-ui)'
};
const sizes = {
  sm: {
    height: 32,
    padding: '0 14px',
    fontSize: 'var(--fs-sm)',
    letterSpacing: '0.02em'
  },
  md: {
    height: 40,
    padding: '0 20px',
    fontSize: 'var(--fs-base)'
  },
  lg: {
    height: 48,
    padding: '0 28px',
    fontSize: 'var(--fs-md)'
  }
};
const tones = {
  primary: {
    background: 'var(--navy-900)',
    color: '#fff'
  },
  accent: {
    background: 'var(--gold-600)',
    color: 'var(--text-on-gold)'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--text-strong)',
    borderColor: 'var(--border-strong)',
    boxShadow: 'var(--shadow-card)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body)'
  },
  danger: {
    background: 'var(--danger)',
    color: '#fff'
  },
  onNavy: {
    background: 'rgba(255,255,255,0.10)',
    color: '#fff',
    borderColor: 'var(--border-inverse)'
  }
};
const hovers = {
  primary: {
    background: 'var(--navy-800)'
  },
  accent: {
    background: 'var(--gold-700)'
  },
  secondary: {
    background: 'var(--surface-hover)',
    borderColor: 'var(--stone-400)'
  },
  ghost: {
    background: 'var(--parchment)'
  },
  danger: {
    background: '#8E241C'
  },
  onNavy: {
    background: 'rgba(255,255,255,0.18)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  block,
  disabled,
  iconLeft,
  iconRight,
  href,
  type = 'button',
  onClick,
  style,
  className,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const El = href ? 'a' : 'button';
  const merged = {
    ...base,
    ...sizes[size],
    ...tones[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(press && !disabled ? {
      transform: 'translateY(1px)'
    } : null),
    ...(block ? {
      width: '100%'
    } : null),
    ...(disabled ? {
      opacity: 0.42,
      cursor: 'not-allowed',
      boxShadow: 'none'
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(El, _extends({
    className: className,
    href: href,
    type: href ? undefined : type,
    disabled: href ? undefined : disabled,
    onClick: disabled ? undefined : onClick,
    style: merged,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  tone = 'default',
  padding = 'md',
  interactive,
  as = 'div',
  onClick,
  style,
  className,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const El = as;
  const pads = {
    none: 0,
    sm: 20,
    md: 'var(--gutter-card)',
    lg: 48
  };
  const tones = {
    default: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-card)'
    },
    outline: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'none'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      color: 'var(--text-body)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    navy: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-navy)',
      border: '1px solid var(--border-inverse)',
      boxShadow: 'none'
    },
    accent: {
      background: 'var(--surface-accent-soft)',
      color: 'var(--text-body)',
      border: '1px solid var(--gold-200)',
      boxShadow: 'none'
    }
  };
  return /*#__PURE__*/React.createElement(El, _extends({
    className: className,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-md)',
      padding: pads[padding],
      transition: 'var(--transition-ui)',
      ...tones[tone],
      ...(interactive ? {
        cursor: 'pointer'
      } : null),
      ...(interactive && hover ? {
        boxShadow: 'var(--shadow-raised)',
        borderColor: tone === 'navy' ? 'rgba(255,255,255,0.22)' : 'var(--border-strong)'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LUCIDE_VERSION = '0.474.0';
const url = name => 'https://unpkg.com/lucide-static@' + LUCIDE_VERSION + '/icons/' + name + '.svg';
function Icon({
  name,
  size = 18,
  strokeWidth = 1.5,
  color = 'currentColor',
  style,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    "aria-hidden": "true",
    "data-icon": name,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flexShrink: 0,
      background: color,
      WebkitMaskImage: 'url(' + url(name) + ')',
      maskImage: 'url(' + url(name) + ')',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      opacity: strokeWidth < 1.5 ? 0.9 : 1,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { LUCIDE_VERSION, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 28,
  md: 34,
  lg: 40
};
function IconButton({
  children,
  label,
  variant = 'ghost',
  size = 'md',
  disabled,
  onClick,
  style,
  className,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = sizes[size];
  const tones = {
    ghost: {
      background: 'transparent',
      color: 'var(--text-muted)',
      borderColor: 'transparent'
    },
    outline: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      borderColor: 'var(--border-hairline)'
    },
    solid: {
      background: 'var(--navy-900)',
      color: '#fff',
      borderColor: 'transparent'
    },
    onNavy: {
      background: 'rgba(255,255,255,0.08)',
      color: '#fff',
      borderColor: 'var(--border-inverse)'
    }
  };
  const hovers = {
    ghost: {
      background: 'var(--parchment)',
      color: 'var(--text-strong)'
    },
    outline: {
      background: 'var(--surface-hover)',
      borderColor: 'var(--border-strong)'
    },
    solid: {
      background: 'var(--navy-800)'
    },
    onNavy: {
      background: 'rgba(255,255,255,0.16)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    className: className,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid transparent',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      transition: 'var(--transition-ui)',
      ...tones[variant],
      ...(hover && !disabled ? hovers[variant] : null),
      ...(disabled ? {
        opacity: 0.42,
        cursor: 'not-allowed'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  selected,
  onClick,
  onRemove,
  style,
  className
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = !!onClick;
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    onClick: onClick,
    role: clickable ? 'button' : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-regular)',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (selected ? 'var(--navy-900)' : 'var(--border-subtle)'),
      background: selected ? 'var(--navy-900)' : 'var(--surface-card)',
      color: selected ? '#fff' : 'var(--text-body)',
      cursor: clickable ? 'pointer' : 'default',
      transition: 'var(--transition-ui)',
      ...(hover && clickable && !selected ? {
        borderColor: 'var(--border-strong)',
        background: 'var(--surface-hover)'
      } : null),
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      cursor: 'pointer',
      opacity: 0.5,
      fontSize: 'var(--fs-sm)',
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  eyebrow,
  children,
  footer,
  onClose,
  width = 480,
  style,
  className
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(13,27,42,0.44)',
      backdropFilter: 'blur(3px)',
      padding: 24,
      animation: 'none'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: className,
    onClick: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-pop)',
      padding: 'var(--gutter-card)',
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "k-label",
    style: {
      marginBottom: 10
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--fw-light) var(--fs-2xl)/1.25 var(--font-serif)',
      color: 'var(--text-strong)',
      marginBottom: 14
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-base)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      marginTop: 28
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const tones = {
  info: {
    border: 'var(--navy-100)',
    accent: 'var(--navy-600)'
  },
  success: {
    border: '#C7E0D5',
    accent: 'var(--success)'
  },
  warning: {
    border: 'var(--gold-200)',
    accent: 'var(--warning)'
  },
  danger: {
    border: '#E8C8C3',
    accent: 'var(--danger)'
  }
};
function Toast({
  title,
  children,
  tone = 'info',
  icon,
  onDismiss,
  style,
  className
}) {
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    role: "status",
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      minWidth: 280,
      maxWidth: 420,
      background: 'var(--surface-card)',
      border: '1px solid ' + t.border,
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-pop)',
      padding: '14px 16px',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.accent,
      display: 'flex',
      marginTop: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-base)',
      color: 'var(--text-strong)'
    }
  }, title), children && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      lineHeight: 1.55,
      color: 'var(--text-muted)'
    }
  }, children)), onDismiss && /*#__PURE__*/React.createElement("span", {
    onClick: onDismiss,
    style: {
      cursor: 'pointer',
      color: 'var(--text-faint)',
      fontSize: 'var(--fs-md)',
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  placement = 'top',
  style,
  className
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%,-8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%,8px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-8px,-50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(8px,-50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      zIndex: 70,
      ...pos,
      background: 'var(--navy-900)',
      color: '#fff',
      borderRadius: 'var(--radius-sm)',
      padding: '6px 10px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-lift)',
      pointerEvents: 'none'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  description,
  checked,
  onChange,
  disabled,
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: className,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: description ? 'flex-start' : 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flexShrink: 0,
      marginTop: description ? 1 : 0,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid ' + (checked ? 'var(--navy-900)' : 'var(--border-strong)'),
      background: checked ? 'var(--navy-900)' : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'var(--transition-ui)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2 4.7 8.4 9.5 3.6",
    stroke: "#fff",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-base)',
      color: 'var(--text-body)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)',
      lineHeight: 1.5
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  required,
  htmlFor,
  children,
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-micro-plus)',
      letterSpacing: 'var(--ls-label-xs)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-600)'
    }
  }, " *")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: error ? 'var(--danger)' : 'var(--text-muted)',
      lineHeight: 1.5
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const inputShell = (invalid, focus, disabled) => ({
  width: '100%',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-base)',
  color: 'var(--text-strong)',
  background: disabled ? 'var(--parchment)' : 'var(--surface-card)',
  border: '1px solid ' + (invalid ? 'var(--danger)' : focus ? 'var(--navy-500)' : 'var(--border-strong)'),
  borderRadius: 'var(--radius-md)',
  outline: 'none',
  boxShadow: focus ? '0 0 0 3px rgba(200,146,42,0.18)' : 'none',
  transition: 'var(--transition-ui)',
  opacity: disabled ? 0.6 : 1
});
function Input({
  invalid,
  disabled,
  iconLeft,
  size = 'md',
  style,
  className,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 34 : size === 'lg' ? 48 : 40;
  const input = /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    className: className,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...inputShell(invalid, focus, disabled),
      height: h,
      padding: iconLeft ? '0 14px 0 38px' : '0 14px',
      ...style
    }
  }, rest));
  if (!iconLeft) return input;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 13,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--text-faint)',
      display: 'flex'
    }
  }, iconLeft), input);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  description,
  checked,
  onChange,
  name,
  value,
  disabled,
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: className,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: description ? 'flex-start' : 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flexShrink: 0,
      marginTop: description ? 1 : 0,
      borderRadius: '50%',
      border: '1px solid ' + (checked ? 'var(--navy-900)' : 'var(--border-strong)'),
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'var(--transition-ui)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--navy-900)'
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: !!checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-base)',
      color: 'var(--text-body)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)',
      lineHeight: 1.5
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const selectShell = (invalid, focus, disabled) => ({
  width: '100%',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-base)',
  color: 'var(--text-strong)',
  background: disabled ? 'var(--parchment)' : 'var(--surface-card)',
  border: '1px solid ' + (invalid ? 'var(--danger)' : focus ? 'var(--navy-500)' : 'var(--border-strong)'),
  borderRadius: 'var(--radius-md)',
  outline: 'none',
  boxShadow: focus ? '0 0 0 3px rgba(200,146,42,0.18)' : 'none',
  transition: 'var(--transition-ui)',
  opacity: disabled ? 0.6 : 1
});
function Select({
  options = [],
  invalid,
  disabled,
  placeholder,
  size = 'md',
  style,
  className,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 34 : size === 'lg' ? 48 : 40;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    className: className,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...selectShell(invalid, focus, disabled),
      height: h,
      padding: '0 34px 0 14px',
      appearance: 'none',
      cursor: 'pointer',
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 13,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-faint)',
      fontSize: 10
    }
  }, "\u25BE"));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label,
  disabled,
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 38,
      height: 22,
      borderRadius: 'var(--radius-pill)',
      padding: 2,
      flexShrink: 0,
      background: checked ? 'var(--gold-600)' : 'var(--stone-300)',
      transition: 'background-color var(--dur-base) var(--ease-out)',
      display: 'inline-flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-card)',
      transform: 'translateX(' + (checked ? 16 : 0) + 'px)',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-base)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const textareaShell = (invalid, focus, disabled) => ({
  width: '100%',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-base)',
  color: 'var(--text-strong)',
  background: disabled ? 'var(--parchment)' : 'var(--surface-card)',
  border: '1px solid ' + (invalid ? 'var(--danger)' : focus ? 'var(--navy-500)' : 'var(--border-strong)'),
  borderRadius: 'var(--radius-md)',
  outline: 'none',
  boxShadow: focus ? '0 0 0 3px rgba(200,146,42,0.18)' : 'none',
  transition: 'var(--transition-ui)',
  opacity: disabled ? 0.6 : 1
});
function Textarea({
  invalid,
  disabled,
  rows = 4,
  style,
  className,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    className: className,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...textareaShell(invalid, focus, disabled),
      padding: '12px 14px',
      lineHeight: 'var(--lh-body)',
      resize: 'vertical',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/marketplace/Rating.jsx
try { (() => {
function Rating({
  value = 0,
  count,
  size = 13,
  style,
  className
}) {
  const full = Math.round(value * 2) / 2;
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 2
    }
  }, [1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'relative',
      width: size,
      height: size,
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 20 20",
    width: size,
    height: size,
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 1.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.6 7.7l5.8-.8L10 1.6z",
    fill: full >= i ? 'var(--gold-600)' : full >= i - 0.5 ? 'var(--gold-300)' : 'var(--stone-300)'
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)'
    }
  }, value.toFixed(1), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)'
    }
  }, " (", count, ")")));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketplace/Rating.jsx", error: String((e && e.message) || e) }); }

// components/marketplace/GigCard.jsx
try { (() => {
function GigCard({
  title,
  client,
  rate,
  period,
  location,
  tags = [],
  badge,
  rating,
  reviews,
  posted,
  onClick,
  style,
  className
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      padding: 24,
      border: '1px solid ' + (hover ? 'var(--border-strong)' : 'transparent'),
      boxShadow: hover ? 'var(--shadow-raised)' : 'var(--shadow-card)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'var(--transition-ui)',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: client,
    size: "md",
    verified: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-md)',
      color: 'var(--text-strong)',
      lineHeight: 1.3
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)'
    }
  }, client, location ? ' · ' + location : ''))), badge && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "gold"
  }, badge)), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-hairline)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-lg)',
      color: 'var(--text-strong)'
    }
  }, rate, period && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-regular)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)'
    }
  }, " / ", period)), rating != null ? /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: rating,
    count: reviews
  }) : posted ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-faint)'
    }
  }, posted) : null));
}
Object.assign(__ds_scope, { GigCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketplace/GigCard.jsx", error: String((e && e.message) || e) }); }

// components/marketplace/StatTile.jsx
try { (() => {
function StatTile({
  label,
  value,
  delta,
  tone = 'default',
  style,
  className
}) {
  const inverse = tone === 'navy';
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      background: inverse ? 'var(--surface-inverse)' : 'var(--surface-card)',
      border: '1px solid ' + (inverse ? 'var(--border-inverse)' : 'transparent'),
      boxShadow: inverse ? 'none' : 'var(--shadow-card)',
      borderRadius: 'var(--radius-md)',
      padding: '20px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-micro-plus)',
      letterSpacing: 'var(--ls-label-sm)',
      textTransform: 'uppercase',
      color: inverse ? 'var(--text-on-navy-muted)' : 'var(--text-faint)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-3xl)',
      lineHeight: 1,
      letterSpacing: 'var(--ls-tight)',
      color: inverse ? '#fff' : 'var(--text-strong)'
    }
  }, value), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: inverse ? 'var(--gold-400)' : 'var(--success)'
    }
  }, delta));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketplace/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Stepper.jsx
try { (() => {
function Stepper({
  steps = [],
  current = 0,
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      ...style
    }
  }, steps.map((label, i) => {
    const done = i < current,
      on = i === current;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: label
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: '50%',
        flexShrink: 0,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--fs-xs)',
        fontWeight: 'var(--fw-bold)',
        background: done ? 'var(--gold-600)' : on ? 'var(--navy-900)' : 'transparent',
        color: done || on ? '#fff' : 'var(--text-faint)',
        border: '1px solid ' + (done ? 'var(--gold-600)' : on ? 'var(--navy-900)' : 'var(--border-strong)')
      }
    }, done ? '✓' : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        letterSpacing: '0.01em',
        color: on ? 'var(--text-strong)' : 'var(--text-muted)',
        fontWeight: on ? 'var(--fw-medium)' : 'var(--fw-regular)',
        whiteSpace: 'nowrap'
      }
    }, label)), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: 'var(--border-hairline)',
        margin: '0 16px',
        minWidth: 24
      }
    }));
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  style,
  className
}) {
  const active = value != null ? value : items[0] && (items[0].value || items[0]);
  const get = t => typeof t === 'string' ? {
    value: t,
    label: t
  } : t;
  if (variant === 'segmented') {
    return /*#__PURE__*/React.createElement("div", {
      className: className,
      style: {
        display: 'inline-flex',
        gap: 2,
        padding: 3,
        background: 'var(--parchment)',
        borderRadius: 'var(--radius-md)',
        ...style
      }
    }, items.map(raw => {
      const t = get(raw);
      const on = t.value === active;
      return /*#__PURE__*/React.createElement("button", {
        key: t.value,
        type: "button",
        onClick: () => onChange && onChange(t.value),
        style: {
          border: 'none',
          cursor: 'pointer',
          borderRadius: 'var(--radius-sm)',
          padding: '7px 16px',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--fs-sm)',
          fontWeight: 'var(--fw-medium)',
          background: on ? 'var(--surface-card)' : 'transparent',
          color: on ? 'var(--text-strong)' : 'var(--text-muted)',
          boxShadow: on ? 'var(--shadow-card)' : 'none',
          transition: 'var(--transition-ui)'
        }
      }, t.label);
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      gap: 28,
      borderBottom: '1px solid var(--border-hairline)',
      ...style
    }
  }, items.map(raw => {
    const t = get(raw);
    const on = t.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      type: "button",
      onClick: () => onChange && onChange(t.value),
      style: {
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        padding: '0 0 12px',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-base)',
        fontWeight: on ? 'var(--fw-medium)' : 'var(--fw-regular)',
        color: on ? 'var(--text-strong)' : 'var(--text-muted)',
        borderBottom: '2px solid ' + (on ? 'var(--gold-600)' : 'transparent'),
        marginBottom: -1,
        transition: 'var(--transition-ui)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8
      }
    }, t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-xs)',
        color: 'var(--text-faint)'
      }
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// export/kontrak-website/js/browse-work.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(function () {
  const {
    Button,
    Card,
    Input,
    Select,
    Tag,
    Tabs,
    Switch,
    Icon,
    GigCard,
    Badge
  } = window.KontrakDesignSystem_5cbea0;
  const BRIEFS = [{
    title: 'Review a SaaS reseller agreement',
    client: 'Aurelis Studio',
    location: 'Remote · Berlin',
    rate: '€480',
    period: 'fixed',
    tags: ['SaaS & IT', 'Contract review'],
    badge: 'Day-cap safe',
    rating: 4.9,
    reviews: 22
  }, {
    title: 'DPA and SCC pack for a cloud migration',
    client: 'Ferrow Rechtsanwälte',
    location: 'München',
    rate: '€34',
    period: 'hour',
    tags: ['Data protection', 'Drafting'],
    rating: 4.7,
    reviews: 14
  }, {
    title: 'AI Act risk-classification memo for a scoring model',
    client: 'Halden & Co',
    location: 'Remote · EU',
    rate: '€620',
    period: 'fixed',
    tags: ['AI & regulation', 'Research'],
    badge: 'Day-cap safe',
    rating: 5.0,
    reviews: 9
  }, {
    title: 'Open-source licence audit for a Series A data room',
    client: 'Nordwind Ventures',
    location: 'Hamburg',
    rate: '€26',
    period: 'hour',
    tags: ['IP & licensing', 'Due diligence'],
    rating: 4.4,
    reviews: 31
  }, {
    title: 'Trademark filing support — 6 Nizza classes, fintech brand',
    client: 'Studio Mor',
    location: 'Remote · Köln',
    rate: '€340',
    period: 'fixed',
    tags: ['IP & licensing', 'Filings'],
    rating: 4.8,
    reviews: 6
  }, {
    title: 'Werkstudent: SaaS contract templates for a Series A',
    client: 'Kelvin Analytics GmbH',
    location: 'Leipzig',
    rate: '€29',
    period: 'hour',
    tags: ['Corporate', 'Drafting'],
    badge: 'Day-cap safe',
    rating: 4.6,
    reviews: 12
  }, {
    title: 'BaFin outsourcing clauses for a payments integration',
    client: 'Selfa Pay GmbH',
    location: 'Frankfurt',
    rate: '€520',
    period: 'fixed',
    tags: ['Fintech', 'Regulatory'],
    rating: 4.9,
    reviews: 17
  }, {
    title: 'Market-definition note for a merger filing',
    client: 'Ostwald Economics',
    location: 'Remote · Berlin',
    rate: '€31',
    period: 'hour',
    tags: ['Competition', 'Economics'],
    badge: 'Day-cap safe',
    rating: 4.8,
    reviews: 11
  }];
  function BrowseWork({
    go
  }) {
    const [tab, setTab] = React.useState('open');
    const [areas, setAreas] = React.useState(['SaaS & IT']);
    const [visaOnly, setVisaOnly] = React.useState(false);
    const toggle = a => setAreas(areas.includes(a) ? areas.filter(x => x !== a) : [...areas, a]);
    const list = visaOnly ? BRIEFS.filter(b => b.badge) : BRIEFS;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto',
        padding: '48px 40px 88px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-eyebrow",
      style: {
        marginBottom: 12
      }
    }, "Open briefs"), /*#__PURE__*/React.createElement("h1", {
      style: {
        font: '300 44px/1.15 var(--font-serif)',
        color: 'var(--text-strong)',
        marginBottom: 32
      }
    }, "Find contract work"), /*#__PURE__*/React.createElement(Card, {
      padding: "sm",
      style: {
        marginBottom: 28,
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr auto',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "Search briefs, clients, practice areas\u2026",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "search",
        size: 15
      })
    }), /*#__PURE__*/React.createElement(Select, {
      placeholder: "All jurisdictions",
      options: ['Germany', 'Austria', 'Switzerland', 'EU-wide']
    }), /*#__PURE__*/React.createElement(Select, {
      placeholder: "Any fee type",
      options: ['Fixed fee', 'Hourly', 'Retainer']
    }), /*#__PURE__*/React.createElement(Button, null, "Search")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, ['SaaS & IT', 'Data protection', 'AI & regulation', 'IP & licensing', 'Fintech', 'Corporate', 'Competition', 'Economics'].map(a => /*#__PURE__*/React.createElement(Tag, {
      key: a,
      selected: areas.includes(a),
      onClick: () => toggle(a)
    }, a)), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Switch, {
      checked: visaOnly,
      onChange: setVisaOnly,
      label: "Fits my remaining days"
    }))), /*#__PURE__*/React.createElement(Tabs, {
      value: tab,
      onChange: setTab,
      style: {
        marginBottom: 24
      },
      items: [{
        value: 'open',
        label: 'All open',
        count: list.length
      }, {
        value: 'new',
        label: 'Posted today',
        count: 2
      }, {
        value: 'saved',
        label: 'Saved',
        count: 4
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16
      }
    }, list.map(b => /*#__PURE__*/React.createElement(GigCard, _extends({
      key: b.title
    }, b, {
      onClick: () => go('gig')
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 36
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary"
    }, "Load 26 more briefs")));
  }
  Object.assign(window, {
    BrowseWork
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/kontrak-website/js/browse-work.jsx", error: String((e && e.message) || e) }); }

// export/kontrak-website/js/chrome.jsx
try { (() => {
(function () {
  const {
    Logo,
    Button,
    Icon
  } = window.KontrakDesignSystem_5cbea0;
  function SiteHeader({
    route,
    go
  }) {
    const links = [['work', 'Find work'], ['clients', 'For clients'], ['visa', 'Visa & rules'], ['pricing', 'Pricing']];
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 30,
        background: 'rgba(247,245,240,0.88)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto',
        padding: '0 40px',
        height: 76,
        display: 'flex',
        alignItems: 'center',
        gap: 40
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        cursor: 'pointer'
      },
      onClick: () => go('home')
    }, /*#__PURE__*/React.createElement(Logo, {
      size: 38,
      tagline: false
    })), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        gap: 28,
        flex: 1
      }
    }, links.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
      key: id,
      onClick: () => go(id),
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-base)',
        cursor: 'pointer',
        color: route === id ? 'var(--text-strong)' : 'var(--text-muted)'
      }
    }, label))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: () => go('signup')
    }, "Log in"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      onClick: () => go('signup')
    }, "Join as a student"))));
  }
  function SiteFooter({
    go = () => {}
  }) {
    const cols = [['For students', [['Find work', 'work'], ['Visa & hour rules', 'visa'], ['Get verified', 'signup'], ['Rates guide', 'visa']]], ['For clients', [['Post a brief', 'clients'], ['How vetting works', 'clients'], ['Pricing', 'pricing'], ['Escrow & payments', 'pricing']]], ['Company', [['About', 'home'], ['Careers', 'home'], ['Press', 'home'], ['Contact', 'home']]]];
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: 'var(--navy-900)',
        color: 'var(--text-on-navy)',
        padding: '64px 40px 40px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
        gap: 40
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      tone: "onNavy",
      size: 40
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-base)',
        lineHeight: 1.65,
        color: 'var(--text-on-navy-muted)',
        maxWidth: '30ch'
      }
    }, "Legal freelancing built around international students in Germany \u2014 scoped, signed and paid in one place.")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
      key: h,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-micro)',
        letterSpacing: 'var(--ls-label-sm)',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.38)'
      }
    }, h), items.map(([label, r]) => /*#__PURE__*/React.createElement("a", {
      key: label,
      onClick: () => go(r),
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-base)',
        color: 'var(--text-on-navy-muted)',
        cursor: 'pointer'
      }
    }, label))))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--maxw-content)',
        margin: '48px auto 0',
        paddingTop: 24,
        borderTop: '1px solid var(--border-inverse)',
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'rgba(255,255,255,0.38)'
      }
    }, "\xA9 2026 Kontrak Ltd."), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-micro)',
        letterSpacing: 'var(--ls-label-sm)',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.28)'
      }
    }, "Work Legal \xB7 Work Smart")));
  }
  Object.assign(window, {
    SiteHeader,
    SiteFooter
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/kontrak-website/js/chrome.jsx", error: String((e && e.message) || e) }); }

// export/kontrak-website/js/for-clients.jsx
try { (() => {
(function () {
  const {
    Button,
    Card,
    Badge,
    Icon,
    StatTile,
    Stepper,
    Avatar,
    Rating,
    Tag,
    Field,
    Input,
    Select,
    Textarea
  } = window.KontrakDesignSystem_5cbea0;
  const TALENT = [{
    name: 'Aisha Rahman',
    uni: 'Humboldt-Universität zu Berlin',
    area: ['Commercial', 'Privacy'],
    rate: '€34 / h',
    rating: 4.9,
    reviews: 22
  }, {
    name: 'Jonas Weber',
    uni: 'LMU München',
    area: ['Corporate', 'M&A support'],
    rate: '€38 / h',
    rating: 4.8,
    reviews: 16
  }, {
    name: 'Priya Nandra',
    uni: 'Universität Hamburg',
    area: ['Employment'],
    rate: '€29 / h',
    rating: 5.0,
    reviews: 9
  }];
  function ForClients({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--navy-900)',
        color: '#fff',
        padding: '80px 40px 72px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: 56,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-tiny)',
        letterSpacing: 'var(--ls-eyebrow)',
        textTransform: 'uppercase',
        color: 'var(--gold-400)',
        marginBottom: 18
      }
    }, "For clients"), /*#__PURE__*/React.createElement("h1", {
      style: {
        font: '300 52px/1.1 var(--font-serif)',
        color: '#fff',
        marginBottom: 20
      }
    }, "Overflow legal work,", /*#__PURE__*/React.createElement("br", null), "compliantly staffed"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-lg)',
        lineHeight: 1.6,
        color: 'var(--text-on-navy-muted)',
        maxWidth: '46ch',
        marginBottom: 30
      }
    }, "Post a brief and receive scoped bids from verified law students at German universities. We check enrolment, permit wording and hour caps before anyone can bid on your work."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      onClick: () => go('signup'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 17
      })
    }, "Post a brief"), /*#__PURE__*/React.createElement(Button, {
      variant: "onNavy",
      size: "lg",
      onClick: () => go('pricing')
    }, "See pricing"))), /*#__PURE__*/React.createElement(Card, {
      padding: "md"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 16
      }
    }, "Post a brief \xB7 example"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Title",
      htmlFor: "t"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "t",
      defaultValue: "Review a SaaS reseller agreement"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Fee",
      htmlFor: "f"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "f",
      defaultValue: "\u20AC480"
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Scoped hours",
      htmlFor: "h",
      hint: "\u20AC34 / h effective"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "h",
      defaultValue: "14"
    }))), /*#__PURE__*/React.createElement(Field, {
      label: "Jurisdiction",
      htmlFor: "j"
    }, /*#__PURE__*/React.createElement(Select, {
      id: "j",
      options: ['Germany', 'Austria', 'Switzerland', 'EU-wide']
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      block: true,
      onClick: () => go('signup')
    }, "Publish to 2,400 students"))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '48px 40px',
        background: 'var(--parchment)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(StatTile, {
      label: "Median first bid",
      value: "6 h",
      delta: "after publishing"
    }), /*#__PURE__*/React.createElement(StatTile, {
      label: "Avg. brief value",
      value: "\u20AC410"
    }), /*#__PURE__*/React.createElement(StatTile, {
      label: "Verified students",
      value: "2,400+"
    }), /*#__PURE__*/React.createElement(StatTile, {
      label: "Compliance escalations",
      value: "0",
      delta: "Hour caps enforced"
    }))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '80px 40px',
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-eyebrow",
      style: {
        marginBottom: 14
      }
    }, "How hiring works"), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: '300 38px/1.15 var(--font-serif)',
        color: 'var(--text-strong)',
        marginBottom: 40,
        maxWidth: '24ch'
      }
    }, "Four steps, one invoice"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 20
      }
    }, [['file-text', 'Post the brief', 'Scope, fee, deadline, jurisdiction. Fixed fee or hourly.'], ['users', 'Review bids', 'Each bid carries the student\'s university, practice areas, rate and remaining permitted hours.'], ['file-signature', 'Sign', 'We generate the engagement letter under German law. Both sides sign in-app.'], ['wallet', 'Fund escrow', 'Fees sit in escrow and release on your sign-off. One monthly invoice with VAT.']].map(([ic, t, d], i) => /*#__PURE__*/React.createElement(Card, {
      key: t,
      tone: "outline",
      padding: "sm",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 22,
      color: "var(--navy-700)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--fs-2xl)',
        color: 'var(--gold-200)'
      }
    }, "0", i + 1)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 'var(--fs-md)',
        color: 'var(--text-strong)'
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-base)',
        lineHeight: 1.6,
        color: 'var(--text-muted)'
      }
    }, d))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 40px 80px',
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 20,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 16
      }
    }, "Verification we run"), [['badge-check', 'Enrolment confirmed with the university registrar'], ['shield-check', 'Residence permit wording read and recorded'], ['clock', 'Remaining day-account balance checked before every bid'], ['scale', 'Practice-area references from prior engagements']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
        padding: '13px 0',
        borderTop: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 18,
      color: "var(--navy-500)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-base)',
        lineHeight: 1.55,
        color: 'var(--text-body)'
      }
    }, t)))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-label"
    }, "Students bidding this week"), /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Example data")), TALENT.map(t => /*#__PURE__*/React.createElement("div", {
      key: t.name,
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        padding: '14px 0',
        borderTop: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: t.name,
      verified: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 'var(--fs-base)',
        color: 'var(--text-strong)'
      }
    }, t.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-muted)'
      }
    }, t.uni), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 5,
        marginTop: 7
      }
    }, t.area.map(a => /*#__PURE__*/React.createElement(Tag, {
      key: a
    }, a)))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--fs-md)',
        color: 'var(--text-strong)'
      }
    }, t.rate), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement(Rating, {
      value: t.rating,
      count: t.reviews,
      size: 11
    })))))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 40px 96px',
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      tone: "navy",
      padding: "lg",
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 40
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        font: '300 30px/1.25 var(--font-serif)',
        color: '#fff',
        marginBottom: 12
      }
    }, "Your first brief is free to post"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-md)',
        color: 'var(--text-on-navy-muted)',
        maxWidth: '52ch'
      }
    }, "No listing fee, no subscription. We take a platform fee on completed engagements only.")), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      onClick: () => go('signup')
    }, "Post a brief"))));
  }
  Object.assign(window, {
    ForClients
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/kontrak-website/js/for-clients.jsx", error: String((e && e.message) || e) }); }

// export/kontrak-website/js/gig-detail.jsx
try { (() => {
(function () {
  const {
    Button,
    Card,
    Badge,
    Tag,
    Avatar,
    Rating,
    Icon,
    Field,
    Input,
    Textarea,
    Stepper,
    Dialog,
    Toast
  } = window.KontrakDesignSystem_5cbea0;
  function GigDetail({
    go
  }) {
    const [open, setOpen] = React.useState(false);
    const [sent, setSent] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto',
        padding: '40px 40px 88px'
      }
    }, /*#__PURE__*/React.createElement("a", {
      onClick: () => go('work'),
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-muted)',
        cursor: 'pointer',
        display: 'inline-flex',
        gap: 6,
        alignItems: 'center',
        marginBottom: 24
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 14
    }), " All briefs"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.6fr 0.9fr',
        gap: 32,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 20,
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 12
      }
    }, "Commercial \xB7 Contract review"), /*#__PURE__*/React.createElement("h1", {
      style: {
        font: '300 34px/1.2 var(--font-serif)',
        color: 'var(--text-strong)',
        marginBottom: 12
      }
    }, "Review a SaaS reseller agreement"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "gold"
    }, "Day-cap safe"), /*#__PURE__*/React.createElement(Badge, {
      tone: "navy",
      dot: true
    }, "Escrow ready"))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--fs-4xl)',
        color: 'var(--text-strong)',
        lineHeight: 1
      }
    }, "\u20AC480"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-muted)',
        marginTop: 6
      }
    }, "fixed fee \xB7 14 h scope \xB7 \u20AC34.29 / h"))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: 'var(--border-hairline)',
        margin: '0 0 20px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-md)',
        lineHeight: 1.7,
        color: 'var(--text-body)',
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("p", null, "We're signing our first reseller in the Nordics and need a second pair of eyes on the agreement before it goes back to their counsel."), /*#__PURE__*/React.createElement("p", null, "Deliverable is a marked-up copy plus a one-page risk note. Our Syndikusanw\xE4ltin will walk you through the commercial context on a 30-minute call.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 16,
        marginTop: 28
      }
    }, [['calendar', 'Deadline', '12 Sep 2026'], ['globe', 'Jurisdiction', 'Germany · BGB / HGB'], ['clock', 'Scoped hours', '14 h · 2 full days']].map(([ic, l, v]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 17,
      color: "var(--navy-500)"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 4
      }
    }, l), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-base)',
        color: 'var(--text-strong)'
      }
    }, v)))))), /*#__PURE__*/React.createElement(Card, {
      tone: "outline"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 16
      }
    }, "What happens after you bid"), /*#__PURE__*/React.createElement(Stepper, {
      steps: ['Bid sent', 'Client review', 'Contract signed', 'Escrow funded'],
      current: 0
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        position: 'sticky',
        top: 100
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Aurelis Studio",
      size: "lg",
      verified: true
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 'var(--fs-md)',
        color: 'var(--text-strong)'
      }
    }, "Aurelis Studio"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-muted)'
      }
    }, "Remote \xB7 Berlin \xB7 14 briefs posted"))), /*#__PURE__*/React.createElement(Rating, {
      value: 4.9,
      count: 22
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: 'var(--border-hairline)',
        margin: '18px 0'
      }
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      block: true,
      size: "lg",
      onClick: () => setOpen(true)
    }, "Send a bid"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      block: true,
      style: {
        marginTop: 8
      },
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "bookmark",
        size: 15
      })
    }, "Save brief")), /*#__PURE__*/React.createElement(Card, {
      tone: "accent",
      padding: "sm"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 18,
      color: "var(--gold-700)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        lineHeight: 1.55,
        color: 'var(--text-body)'
      }
    }, "Fits your remaining ", /*#__PURE__*/React.createElement("strong", null, "7.5 hours"), " this week and ", /*#__PURE__*/React.createElement("strong", null, "54 full days"), " this year."))))), /*#__PURE__*/React.createElement(Dialog, {
      open: open,
      eyebrow: "Your bid",
      title: "Bid on this brief",
      width: 520,
      onClose: () => setOpen(false),
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: () => setOpen(false)
      }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
        variant: "accent",
        onClick: () => {
          setOpen(false);
          setSent(true);
        }
      }, "Send bid"))
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Your fee",
      htmlFor: "fee"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "fee",
      defaultValue: "\u20AC480"
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Hours you'll bill",
      htmlFor: "hrs",
      hint: "7.5 h left this week \xB7 floor \u20AC13.90/h"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "hrs",
      defaultValue: "14"
    }))), /*#__PURE__*/React.createElement(Field, {
      label: "Scope note",
      htmlFor: "sc"
    }, /*#__PURE__*/React.createElement(Textarea, {
      id: "sc",
      rows: 3,
      placeholder: "How you'd approach the mark-up\u2026"
    })))), sent && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        right: 24,
        bottom: 24,
        zIndex: 80
      }
    }, /*#__PURE__*/React.createElement(Toast, {
      tone: "success",
      title: "Bid sent",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "check-circle"
      }),
      onDismiss: () => setSent(false)
    }, "Aurelis Studio usually replies within a day.")));
  }
  Object.assign(window, {
    GigDetail
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/kontrak-website/js/gig-detail.jsx", error: String((e && e.message) || e) }); }

// export/kontrak-website/js/home.jsx
try { (() => {
(function () {
  const {
    Button,
    Card,
    Badge,
    Icon,
    StatTile,
    GigCard,
    Tag
  } = window.KontrakDesignSystem_5cbea0;

  /* Reveals a block once, on first scroll into view. Fade + 14px rise, nothing else. */
  function Reveal({
    children,
    delay = 0,
    style
  }) {
    const ref = React.useRef(null);
    const [seen, setSeen] = React.useState(false);
    React.useEffect(() => {
      const el = ref.current;
      if (!el || seen) return;
      const io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      }, {
        rootMargin: '-8% 0px -12%'
      });
      io.observe(el);
      return () => io.disconnect();
    }, [seen]);
    return /*#__PURE__*/React.createElement("div", {
      ref: ref,
      className: 'k-reveal' + (seen ? ' in' : ''),
      style: {
        animationDelay: delay + 'ms',
        ...style
      }
    }, children);
  }

  /* Counts a figure up once it is in view. Prefix/suffix keep the brand's formatting. */
  function Figure({
    to,
    prefix = '',
    suffix = '',
    decimals = 0,
    duration = 1100
  }) {
    const ref = React.useRef(null);
    const [v, setV] = React.useState(0);
    React.useEffect(() => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setV(to);
        return;
      }
      const io = new IntersectionObserver(([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = t => {
          const p = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setV(to * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }, {
        rootMargin: '-10% 0px'
      });
      io.observe(el);
      return () => io.disconnect();
    }, [to, duration]);
    const shown = decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString('en-GB');
    return /*#__PURE__*/React.createElement("span", {
      ref: ref
    }, prefix, shown, suffix);
  }
  function Home({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--navy-900)',
        color: '#fff',
        padding: '96px 40px 88px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.15fr 0.85fr',
        gap: 64,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "k-enter",
      style: {
        animationDelay: '40ms',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-tiny)',
        letterSpacing: 'var(--ls-eyebrow)',
        textTransform: 'uppercase',
        color: 'var(--gold-400)',
        marginBottom: 16
      }
    }, "Legal freelancing for international students \xB7 Germany"), /*#__PURE__*/React.createElement("div", {
      className: "k-rule",
      style: {
        animationDelay: '220ms',
        width: 64,
        height: 1.5,
        background: 'var(--gold-500)',
        marginBottom: 24
      }
    }), /*#__PURE__*/React.createElement("h1", {
      style: {
        font: '300 64px/1.08 var(--font-serif)',
        color: '#fff',
        letterSpacing: '-0.01em',
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-enter",
      style: {
        animationDelay: '120ms',
        display: 'block'
      }
    }, "Paid legal work"), /*#__PURE__*/React.createElement("span", {
      className: "k-enter",
      style: {
        animationDelay: '240ms',
        display: 'block'
      }
    }, "that fits your visa")), /*#__PURE__*/React.createElement("p", {
      className: "k-enter",
      style: {
        animationDelay: '340ms',
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-lg)',
        lineHeight: 1.6,
        color: 'var(--text-on-navy-muted)',
        maxWidth: '46ch',
        marginBottom: 32
      }
    }, "Kontrak matches law students at German universities with real contract work from vetted clients. Every brief is checked against your \xA716b day account, every fee sits in escrow, every engagement is a signed contract."), /*#__PURE__*/React.createElement("div", {
      className: "k-enter",
      style: {
        animationDelay: '440ms',
        display: 'flex',
        gap: 12,
        marginBottom: 36
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      onClick: () => go('signup'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 17
      })
    }, "Join as a student"), /*#__PURE__*/React.createElement(Button, {
      variant: "onNavy",
      size: "lg",
      onClick: () => go('work')
    }, "Browse open briefs")), /*#__PURE__*/React.createElement("div", {
      className: "k-enter",
      style: {
        animationDelay: '560ms',
        display: 'flex',
        gap: 22,
        alignItems: 'center'
      }
    }, [['shield-check', '140-day account tracked'], ['file-signature', 'Contract on every gig'], ['wallet', 'Escrow-held fees in EUR']].map(([ic, t]) => /*#__PURE__*/React.createElement("span", {
      key: t,
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'rgba(255,255,255,0.6)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 16,
      color: "var(--gold-400)"
    }), t)))), /*#__PURE__*/React.createElement(Card, {
      tone: "default",
      padding: "none",
      className: "k-fade",
      style: {
        animationDelay: '480ms',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '20px 24px',
        borderBottom: '1px solid var(--border-hairline)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-label"
    }, "Live briefs"), /*#__PURE__*/React.createElement("span", {
      className: "k-pulse"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      dot: true
    }, "34 open"))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        background: 'var(--warm-white)'
      }
    }, /*#__PURE__*/React.createElement(GigCard, {
      title: "Review a SaaS reseller agreement",
      client: "Aurelis Studio",
      location: "Remote \xB7 Berlin",
      rate: "\u20AC480",
      period: "fixed",
      tags: ['SaaS & IT'],
      badge: "Day-cap safe",
      posted: "Posted 2h ago",
      onClick: () => go('work')
    }), /*#__PURE__*/React.createElement(GigCard, {
      title: "DPA and SCC pack for a cloud migration",
      client: "Ferrow Rechtsanw\xE4lte",
      location: "M\xFCnchen",
      rate: "\u20AC34",
      period: "hour",
      tags: ['Data protection'],
      posted: "Posted today",
      onClick: () => go('work')
    }))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '56px 40px',
        background: 'var(--parchment)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 16
      }
    }, [{
      label: 'Students earning',
      node: /*#__PURE__*/React.createElement(Figure, {
        to: 2400,
        suffix: "+"
      })
    }, {
      label: 'Avg. fee per brief',
      node: /*#__PURE__*/React.createElement(Figure, {
        to: 410,
        prefix: "\u20AC"
      })
    }, {
      label: 'Paid through escrow',
      node: /*#__PURE__*/React.createElement(Figure, {
        to: 2.1,
        prefix: "\u20AC",
        suffix: "M",
        decimals: 1
      })
    }, {
      label: 'Visa breaches',
      node: /*#__PURE__*/React.createElement(Figure, {
        to: 0
      }),
      delta: 'Day caps enforced'
    }].map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: s.label,
      delay: i * 90
    }, /*#__PURE__*/React.createElement(StatTile, {
      label: s.label,
      value: s.node,
      delta: s.delta
    }))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '88px 40px',
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
      className: "k-eyebrow",
      style: {
        marginBottom: 14
      }
    }, "How it works"), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: '300 40px/1.15 var(--font-serif)',
        color: 'var(--text-strong)',
        marginBottom: 48,
        maxWidth: '22ch'
      }
    }, "Four steps from brief to bank transfer")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 20
      }
    }, [['search', 'Get matched', 'We surface briefs that match your practice area, jurisdiction and remaining §16b working days.'], ['gavel', 'Bid your terms', 'Send a scope, a fee and a timeline. No auctions, no race to the bottom.'], ['file-signature', 'Sign the contract', 'Kontrak generates the engagement letter under German law. Both sides sign in the app.'], ['wallet', 'Get paid', 'The client funds escrow before you start. Funds release on sign-off.']].map(([ic, t, d], i) => /*#__PURE__*/React.createElement(Reveal, {
      key: t,
      delay: i * 110
    }, /*#__PURE__*/React.createElement(Card, {
      tone: "outline",
      padding: "sm",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 22,
      color: "var(--navy-700)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--fs-2xl)',
        color: 'var(--gold-200)'
      }
    }, "0", i + 1)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 'var(--fs-md)',
        color: 'var(--text-strong)'
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-base)',
        lineHeight: 1.6,
        color: 'var(--text-muted)'
      }
    }, d)))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 40px 88px',
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Card, {
      tone: "navy",
      padding: "lg",
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 56,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-tiny)',
        letterSpacing: 'var(--ls-eyebrow)',
        textTransform: 'uppercase',
        color: 'var(--gold-400)',
        marginBottom: 16
      }
    }, "Built for German student permits"), /*#__PURE__*/React.createElement("h3", {
      style: {
        font: '300 32px/1.2 var(--font-serif)',
        color: '#fff',
        marginBottom: 16
      }
    }, "Your 140 days are a hard limit, not a warning"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-md)',
        lineHeight: 1.65,
        color: 'var(--text-on-navy-muted)',
        marginBottom: 24
      }
    }, "Non-EU students may work 140 full days or 280 half days per calendar year, and 20 hours a week in the lecture period. Kontrak blocks bids that would breach either limit, logs every billed hour against the contract, and keeps an exportable record for your Ausl\xE4nderbeh\xF6rde."), /*#__PURE__*/React.createElement(Button, {
      variant: "onNavy",
      size: "sm",
      style: {
        marginBottom: 20
      },
      onClick: () => go('visa'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 15
      })
    }, "Read the German rules"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, ['140 full days / year', '20 h/week in lecture period', '€13.90 statutory floor', 'Exportable hour log'].map(t => /*#__PURE__*/React.createElement("span", {
      key: t,
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        padding: '5px 12px',
        borderRadius: 'var(--radius-pill)',
        border: '1px solid var(--border-inverse)',
        color: 'rgba(255,255,255,0.8)'
      }
    }, t)))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid var(--border-inverse)',
        borderRadius: 'var(--radius-md)',
        padding: 28
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-micro-plus)',
        letterSpacing: 'var(--ls-label-xs)',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.45)'
      }
    }, "This week"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: '#fff'
      }
    }, "12.5 / 20 h")), /*#__PURE__*/React.createElement(Meter, null), [['Contract review · Aurelis', '6.0 h'], ['DPA pack · Ferrow Rechtsanwälte', '4.5 h'], ['Research memo · Halden & Co', '2.0 h']].map(([n, hh]) => /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 0',
        borderTop: '1px solid var(--border-inverse)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'rgba(255,255,255,0.72)'
      }
    }, n), /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#fff'
      }
    }, hh))))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 40px 96px',
        maxWidth: 'var(--maxw-narrow)',
        margin: '0 auto',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1.5,
        height: 52,
        background: 'var(--rule-fade)',
        margin: '0 auto 28px'
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '300 32px/1.35 var(--font-serif)',
        color: 'var(--text-strong)',
        marginBottom: 20
      }
    }, "\u201CI billed 180 hours in my second year without once guessing whether I was allowed to.\u201D"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-micro-plus)',
        letterSpacing: 'var(--ls-label-xs)',
        textTransform: 'uppercase',
        color: 'var(--text-faint)'
      }
    }, "Aisha R. \xB7 LLM candidate, Humboldt-Universit\xE4t zu Berlin \xB7 Kontrak since 2024"))));
  }

  /* Hour meter that fills once, when the band is reached. */
  function Meter() {
    const ref = React.useRef(null);
    const [w, setW] = React.useState(0);
    React.useEffect(() => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setW(62);
        return;
      }
      const io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
          setW(62);
          io.disconnect();
        }
      }, {
        rootMargin: '-10% 0px'
      });
      io.observe(el);
      return () => io.disconnect();
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      ref: ref,
      style: {
        height: 6,
        borderRadius: 3,
        background: 'rgba(255,255,255,0.12)',
        overflow: 'hidden',
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: w + '%',
        height: '100%',
        background: 'var(--gold-500)',
        transition: 'width 1100ms var(--ease-out)'
      }
    }));
  }
  Object.assign(window, {
    Home
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/kontrak-website/js/home.jsx", error: String((e && e.message) || e) }); }

// export/kontrak-website/js/pricing.jsx
try { (() => {
(function () {
  const {
    Button,
    Card,
    Badge,
    Icon,
    Tabs,
    Tooltip
  } = window.KontrakDesignSystem_5cbea0;
  const PLANS = [{
    name: 'Student',
    price: 'Free',
    unit: '',
    line: 'You keep your fee. We take nothing from the student side.',
    items: ['Unlimited bids', 'Day-account tracking', 'Engagement letter generated', 'Escrow protection', 'Exportable hour log for your Ausländerbehörde'],
    cta: 'Join as a student',
    tone: 'default'
  }, {
    name: 'Client · Pay per brief',
    price: '8%',
    unit: 'of the engagement fee',
    line: 'Charged only when work completes. No listing fee.',
    items: ['Unlimited briefs', 'Verified students only', 'Escrow held in EUR', 'Engagement letter under German law', 'Monthly invoice with VAT'],
    cta: 'Post a brief',
    tone: 'accent',
    featured: true
  }, {
    name: 'Client · Chambers',
    price: '€490',
    unit: 'per month',
    line: 'For firms running continuous overflow work.',
    items: ['5% engagement fee', 'Named account manager', 'Framework agreement', 'Bulk hour reporting', 'SSO and shared billing'],
    cta: 'Talk to us',
    tone: 'default'
  }];
  const FEES = [['Engagement fee (pay per brief)', '8% of fee', 'Client'], ['Engagement fee (Chambers)', '5% of fee', 'Client'], ['Escrow handling', 'Included', '—'], ['SEPA payout', 'Included', '—'], ['Non-EUR payout', '1.2% FX', 'Student'], ['Dispute mediation', 'Included', '—']];
  function Pricing({
    go
  }) {
    const [cycle, setCycle] = React.useState('Monthly');
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '56px 40px 40px',
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-eyebrow",
      style: {
        marginBottom: 14
      }
    }, "Pricing"), /*#__PURE__*/React.createElement("h1", {
      style: {
        font: '300 46px/1.12 var(--font-serif)',
        color: 'var(--text-strong)',
        marginBottom: 16,
        maxWidth: '26ch'
      }
    }, "Students pay nothing. Clients pay on completion."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-lg)',
        lineHeight: 1.6,
        color: 'var(--text-muted)',
        maxWidth: '58ch',
        marginBottom: 24
      }
    }, "All figures in EUR, excluding VAT. Escrow is held with a licensed payment institution in the EEA."), /*#__PURE__*/React.createElement(Tabs, {
      variant: "segmented",
      value: cycle,
      onChange: setCycle,
      items: ['Monthly', 'Annual · 2 months free']
    })), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 40px 56px',
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 20,
        alignItems: 'stretch'
      }
    }, PLANS.map(p => /*#__PURE__*/React.createElement(Card, {
      key: p.name,
      tone: p.featured ? 'accent' : 'outline',
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-label"
    }, p.name), p.featured && /*#__PURE__*/React.createElement(Badge, {
      tone: "gold"
    }, "Most used")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--fs-5xl)',
        color: 'var(--text-strong)',
        lineHeight: 1
      }
    }, p.name === 'Client · Chambers' && cycle !== 'Monthly' ? '€408' : p.price), p.unit && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-muted)',
        marginLeft: 8
      }
    }, p.unit)), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-base)',
        lineHeight: 1.6,
        color: 'var(--text-muted)'
      }
    }, p.line), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: 'var(--border-hairline)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        flex: 1
      }
    }, p.items.map(i => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-base)',
        lineHeight: 1.5,
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 16,
      color: "var(--gold-700)",
      style: {
        marginTop: 2
      }
    }), i))), /*#__PURE__*/React.createElement(Button, {
      variant: p.featured ? 'accent' : 'secondary',
      block: true,
      onClick: () => go(p.name === 'Student' ? 'signup' : 'clients')
    }, p.cta))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 40px 56px',
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.3fr 1fr',
        gap: 20,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: "none",
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        background: 'var(--parchment)'
      }
    }, ['Fee', 'Amount', 'Paid by'].map(h => /*#__PURE__*/React.createElement("div", {
      key: h,
      style: {
        padding: '14px 20px',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-micro-plus)',
        letterSpacing: 'var(--ls-label-xs)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, h))), FEES.map(row => /*#__PURE__*/React.createElement("div", {
      key: row[0],
      style: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        borderTop: '1px solid var(--border-hairline)'
      }
    }, row.map((c, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: '16px 20px',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-base)',
        color: i === 0 ? 'var(--text-body)' : 'var(--text-muted)',
        fontWeight: i === 1 ? 500 : 300
      }
    }, c))))), /*#__PURE__*/React.createElement(Card, {
      tone: "navy"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-micro-plus)',
        letterSpacing: 'var(--ls-label-xs)',
        textTransform: 'uppercase',
        color: 'var(--text-on-navy-muted)',
        marginBottom: 16
      }
    }, "Worked example"), [['Brief fee', '€480'], ['Scoped hours', '14 h'], ['Effective rate', '€34.29 / h'], ['Statutory floor', '€13.90 / h'], ['Platform fee (8%)', '€38.40'], ['Student receives', '€480.00'], ['Client pays', '€518.40']].map(([l, v], i, arr) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '11px 0',
        borderTop: '1px solid var(--border-inverse)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'rgba(255,255,255,0.66)'
      }
    }, l), /*#__PURE__*/React.createElement("span", {
      style: {
        color: i >= arr.length - 2 ? 'var(--gold-400)' : '#fff',
        fontFamily: 'var(--font-display)',
        fontWeight: 600
      }
    }, v))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 40px 96px',
        maxWidth: 'var(--maxw-narrow)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-eyebrow",
      style: {
        marginBottom: 20
      }
    }, "Questions we get"), [['Do students ever pay a fee?', 'No. Bidding, contracts, escrow and the exportable hour log are free for students.'], ['When is the platform fee charged?', 'On release of escrow, against the completed engagement. Cancelled briefs cost nothing.'], ['What happens if a brief goes over its scoped hours?', 'The student cannot log hours past the scope without your written approval in-app, and never past their remaining day-account balance.'], ['Is VAT included?', 'No. German VAT at 19% is added on the platform fee and shown on your monthly invoice.']].map(([q, a]) => /*#__PURE__*/React.createElement("div", {
      key: q,
      style: {
        padding: '20px 0',
        borderTop: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 'var(--fs-md)',
        color: 'var(--text-strong)',
        marginBottom: 8
      }
    }, q), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-base)',
        lineHeight: 1.65,
        color: 'var(--text-muted)'
      }
    }, a)))));
  }
  Object.assign(window, {
    Pricing
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/kontrak-website/js/pricing.jsx", error: String((e && e.message) || e) }); }

// export/kontrak-website/js/sign-up.jsx
try { (() => {
(function () {
  const {
    Button,
    Card,
    Logo,
    Field,
    Input,
    Select,
    Checkbox,
    Radio,
    Stepper,
    Icon
  } = window.KontrakDesignSystem_5cbea0;
  function SignUp({
    go
  }) {
    const [role, setRole] = React.useState('student');
    const [ok, setOk] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: 'calc(100vh - 76px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '72px 64px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: 560,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-eyebrow",
      style: {
        marginBottom: 14
      }
    }, "Create your account"), /*#__PURE__*/React.createElement("h1", {
      style: {
        font: '300 40px/1.15 var(--font-serif)',
        color: 'var(--text-strong)',
        marginBottom: 28
      }
    }, "Start billing legal hours"), /*#__PURE__*/React.createElement(Stepper, {
      steps: ['Account', 'Verify', 'Practice areas'],
      current: 0,
      style: {
        marginBottom: 32
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Card, {
      tone: role === 'student' ? 'accent' : 'outline',
      padding: "sm",
      interactive: true,
      onClick: () => setRole('student'),
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Radio, {
      checked: role === 'student',
      label: "I'm a student",
      description: "Bid on briefs, bill hours",
      onChange: () => setRole('student')
    })), /*#__PURE__*/React.createElement(Card, {
      tone: role === 'client' ? 'accent' : 'outline',
      padding: "sm",
      interactive: true,
      onClick: () => setRole('client'),
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Radio, {
      checked: role === 'client',
      label: "I'm hiring",
      description: "Post briefs, fund escrow",
      onChange: () => setRole('client')
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "First name",
      htmlFor: "f"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "f",
      placeholder: "Aisha"
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Last name",
      htmlFor: "l"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "l",
      placeholder: "Rahman"
    }))), /*#__PURE__*/React.createElement(Field, {
      label: "University email",
      htmlFor: "em",
      hint: "We verify enrolment with your institution."
    }, /*#__PURE__*/React.createElement(Input, {
      id: "em",
      placeholder: "a.rahman@hu-berlin.de"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Residence permit",
      htmlFor: "v"
    }, /*#__PURE__*/React.createElement(Select, {
      id: "v",
      placeholder: "Select",
      options: ['§16b student permit (non-EU)', 'EU / EEA citizen', '§16f language course', '§20 job-seeking permit']
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Work allowance",
      htmlFor: "h"
    }, /*#__PURE__*/React.createElement(Select, {
      id: "h",
      placeholder: "Select",
      options: ['140 full / 280 half days', '20 h per week (lecture period)', 'No restriction (EU/EEA)']
    }))), /*#__PURE__*/React.createElement(Checkbox, {
      checked: ok,
      onChange: () => setOk(!ok),
      label: "I confirm my permit allows paid employment",
      description: "Kontrak enforces your 140-day account and keeps an exportable hour log for your Ausl\xE4nderbeh\xF6rde."
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      disabled: !ok,
      onClick: () => go('work'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 17
      })
    }, "Continue to verification"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-muted)'
      }
    }, "Already on Kontrak? ", /*#__PURE__*/React.createElement("a", {
      onClick: () => go('work'),
      style: {
        cursor: 'pointer'
      }
    }, "Log in")))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--navy-900)',
        padding: '72px 64px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 32
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      tone: "onNavy",
      size: 52
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '300 30px/1.35 var(--font-serif)',
        color: '#fff',
        maxWidth: '26ch'
      }
    }, "Every engagement on Kontrak is a signed contract under German law, with the fee already in escrow."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, [['badge-check', 'Enrolment verified with your university'], ['shield-check', '§16b day account tracked automatically'], ['scale', 'No brief below the €13.90 statutory floor'], ['wallet', 'Fees released only on sign-off'], ['file-signature', 'Engagement letter generated for you']].map(([ic, t]) => /*#__PURE__*/React.createElement("span", {
      key: t,
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-md)',
        color: 'var(--text-on-navy-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 18,
      color: "var(--gold-400)"
    }), t)))));
  }
  Object.assign(window, {
    SignUp
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/kontrak-website/js/sign-up.jsx", error: String((e && e.message) || e) }); }

// export/kontrak-website/js/visa-rules.jsx
try { (() => {
(function () {
  const {
    Button,
    Card,
    Badge,
    Tag,
    Tabs,
    Icon,
    StatTile,
    Stepper,
    Tooltip
  } = window.KontrakDesignSystem_5cbea0;
  const MODELS = [{
    name: 'Minijob',
    hours: '≈ 43.4 h / month',
    ceiling: '€603 / month gross',
    tax: 'No income tax, flat employer levy',
    kontrak: 'Fee capped so your month stays under €603'
  }, {
    name: 'Werkstudent',
    hours: '20 h / week in lecture period',
    ceiling: '≈ €1,205 / month at €13.90',
    tax: 'Pension only (9.3%); no health, care or unemployment',
    kontrak: 'Weekly cap enforced before you can bid'
  }, {
    name: 'Fixed-fee brief',
    hours: 'Counts as full or half days',
    ceiling: '140 full / 280 half days per year',
    tax: 'Depends on your permit wording',
    kontrak: 'Effective hourly shown before you accept'
  }];
  const WAGE = [{
    year: '2025',
    rate: '€12.82',
    note: 'Previous statutory floor'
  }, {
    year: '2026',
    rate: '€13.90',
    note: 'In force since 1 January 2026',
    now: true
  }, {
    year: '2027',
    rate: '€14.60',
    note: 'Already legislated'
  }];
  const LOG = [{
    name: 'Contract review · Aurelis Studio',
    days: '8 full days',
    hours: '52 h'
  }, {
    name: 'NDA pack · Ferrow Rechtsanwälte',
    days: '6 half days',
    hours: '21 h'
  }, {
    name: 'Research memo · Halden & Co',
    days: '4 full days',
    hours: '27 h'
  }, {
    name: 'HiWi · Chair of Private Law',
    days: 'Exempt',
    hours: '64 h',
    exempt: true
  }];
  function VisaRules({
    go
  }) {
    const [model, setModel] = React.useState('Werkstudent');
    const [rate, setRate] = React.useState(32);
    const [hours, setHours] = React.useState(12);
    const monthly = Math.round(rate * hours * 4.33);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--parchment)',
        padding: '56px 40px 48px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-eyebrow",
      style: {
        marginBottom: 14
      }
    }, "Visa & rules \xB7 Germany"), /*#__PURE__*/React.createElement("h1", {
      style: {
        font: '300 48px/1.12 var(--font-serif)',
        color: 'var(--text-strong)',
        marginBottom: 18,
        maxWidth: '24ch'
      }
    }, "What German student rules let you bill"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-lg)',
        lineHeight: 1.6,
        color: 'var(--text-muted)',
        maxWidth: '62ch',
        marginBottom: 20
      }
    }, "Every brief on Kontrak is checked against the residence-permit limits in \xA716b of the Aufenthaltsgesetz and the statutory minimum wage under the Mindestlohngesetz. These are the numbers we enforce."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "navy"
    }, "Non-EU \xB7 \xA716b residence permit"), /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Reviewed 28 Aug 2026")))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '40px',
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(StatTile, {
      label: "Statutory minimum wage",
      value: "\u20AC13.90",
      delta: "per hour, since 01.01.2026"
    }), /*#__PURE__*/React.createElement(StatTile, {
      label: "Annual work allowance",
      value: "140",
      delta: "full days, or 280 half days"
    }), /*#__PURE__*/React.createElement(StatTile, {
      label: "Lecture-period cap",
      value: "20 h",
      delta: "per week across all employers"
    }), /*#__PURE__*/React.createElement(StatTile, {
      tone: "navy",
      label: "Minijob ceiling",
      value: "\u20AC603",
      delta: "per month \xB7 \u2248 43.4 h"
    }))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 40px 48px',
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.25fr 1fr',
        gap: 20,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 14
      }
    }, "The day account \xB7 \xA716b(3) AufenthG"), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: '300 28px/1.25 var(--font-serif)',
        color: 'var(--text-strong)',
        marginBottom: 16
      }
    }, "140 full days, 280 half days, one calendar year"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-md)',
        lineHeight: 1.7,
        color: 'var(--text-body)',
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("p", null, "Since 1 March 2024 the allowance is 140 full working days or 280 half working days per calendar year, raised from 120 / 240. A day of more than four hours is a full day; four hours or fewer is a half day. One full day equals two half days, and the two buckets can be mixed."), /*#__PURE__*/React.createElement("p", null, "The account resets on 1 January and runs to 31 December \u2014 not with your academic year. If you arrive in September, you still get the whole 140 days for that year.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16,
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 10
      }
    }, "Counts against the cap"), ['Paid briefs through Kontrak', 'Werkstudent and Minijob days', 'Days worked for any other employer'].map(t => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 9,
        alignItems: 'flex-start',
        padding: '6px 0',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-base)',
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "dot",
      size: 16,
      color: "var(--navy-500)"
    }), t))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 10
      }
    }, "Exempt"), ['HiWi work at your university', 'Mandatory curriculum internships', 'Sick days and paid holiday'].map(t => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 9,
        alignItems: 'flex-start',
        padding: '6px 0',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-base)',
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 16,
      color: "var(--success)"
    }), t))))), /*#__PURE__*/React.createElement(Card, {
      tone: "navy"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-micro-plus)',
        letterSpacing: 'var(--ls-label-xs)',
        textTransform: 'uppercase',
        color: 'var(--text-on-navy-muted)'
      }
    }, "Your day account \xB7 2026"), /*#__PURE__*/React.createElement(Badge, {
      tone: "gold"
    }, "Example")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--fs-5xl)',
        color: '#fff',
        lineHeight: 1
      }
    }, "86", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-xl)',
        color: 'var(--text-on-navy-muted)'
      }
    }, " / 140")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-on-navy-muted)',
        margin: '8px 0 16px'
      }
    }, "full days used \xB7 54 remaining"), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        borderRadius: 3,
        background: 'rgba(255,255,255,0.12)',
        overflow: 'hidden',
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '61%',
        height: '100%',
        background: 'var(--gold-500)'
      }
    })), LOG.map(l => /*#__PURE__*/React.createElement("div", {
      key: l.name,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 12,
        padding: '11px 0',
        borderTop: '1px solid var(--border-inverse)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'rgba(255,255,255,0.72)'
      }
    }, l.name), /*#__PURE__*/React.createElement("span", {
      style: {
        color: l.exempt ? 'var(--gold-400)' : '#fff',
        whiteSpace: 'nowrap'
      }
    }, l.days))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 40px 48px',
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-eyebrow",
      style: {
        marginBottom: 14
      }
    }, "Work models"), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: '300 34px/1.2 var(--font-serif)',
        color: 'var(--text-strong)',
        marginBottom: 24
      }
    }, "Three ways students bill on Kontrak"), /*#__PURE__*/React.createElement(Card, {
      padding: "none",
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1.1fr 1.1fr 1.4fr 1.4fr',
        background: 'var(--parchment)'
      }
    }, ['Model', 'Hours', 'Ceiling', 'Social security', 'What Kontrak does'].map(h => /*#__PURE__*/React.createElement("div", {
      key: h,
      style: {
        padding: '14px 20px',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-micro-plus)',
        letterSpacing: 'var(--ls-label-xs)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, h))), MODELS.map(m => /*#__PURE__*/React.createElement("div", {
      key: m.name,
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1.1fr 1.1fr 1.4fr 1.4fr',
        borderTop: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '18px 20px',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 'var(--fs-base)',
        color: 'var(--text-strong)'
      }
    }, m.name), [m.hours, m.ceiling, m.tax, m.kontrak].map((v, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: '18px 20px',
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-base)',
        lineHeight: 1.55,
        color: i === 3 ? 'var(--text-body)' : 'var(--text-muted)'
      }
    }, v)))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 40px 48px',
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1.15fr',
        gap: 20,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 14
      }
    }, "Minimum wage \xB7 MiLoG"), /*#__PURE__*/React.createElement("h3", {
      style: {
        font: '300 26px/1.25 var(--font-serif)',
        color: 'var(--text-strong)',
        marginBottom: 18
      }
    }, "The floor applies to you too"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-base)',
        lineHeight: 1.65,
        color: 'var(--text-muted)',
        marginBottom: 20
      }
    }, "The statutory minimum wage applies regardless of nationality. Kontrak blocks any brief whose fee divided by its scoped hours falls below the floor in force."), WAGE.map(w => /*#__PURE__*/React.createElement("div", {
      key: w.year,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '12px 0',
        borderTop: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-faint)',
        width: 44
      }
    }, w.year), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--fs-xl)',
        color: w.now ? 'var(--gold-700)' : 'var(--text-strong)',
        width: 86
      }
    }, w.rate), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-muted)',
        flex: 1
      }
    }, w.note), w.now && /*#__PURE__*/React.createElement(Badge, {
      tone: "gold"
    }, "In force")))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-label"
    }, "Earnings estimator"), /*#__PURE__*/React.createElement(Tabs, {
      variant: "segmented",
      value: model,
      onChange: setModel,
      items: ['Minijob', 'Werkstudent']
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 20,
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 10
      }
    }, "Your rate \xB7 \u20AC", rate, " / h"), /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: "13.9",
      max: "60",
      step: "1",
      value: rate,
      onChange: e => setRate(Number(e.target.value)),
      style: {
        width: '100%',
        accentColor: 'var(--gold-600)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-xs)',
        color: 'var(--text-faint)',
        marginTop: 6
      }
    }, "Floor \u20AC13.90 \xB7 median on Kontrak \u20AC32")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 10
      }
    }, "Hours per week \xB7 ", hours, " h"), /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: "2",
      max: "20",
      step: "1",
      value: hours,
      onChange: e => setHours(Number(e.target.value)),
      style: {
        width: '100%',
        accentColor: 'var(--gold-600)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-xs)',
        color: 'var(--text-faint)',
        marginTop: 6
      }
    }, "Lecture-period cap 20 h"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 20,
        padding: '20px 0',
        borderTop: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 6
      }
    }, "Gross per month"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--fs-4xl)',
        color: 'var(--text-strong)',
        lineHeight: 1
      }
    }, "\u20AC", monthly.toLocaleString('en-GB'))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 6
      }
    }, "Days billed / year"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--fs-2xl)',
        color: 'var(--text-strong)'
      }
    }, "\u2248 ", Math.min(140, Math.round(hours / 4 * 52)), " half days"))), model === 'Minijob' && monthly > 603 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        padding: '14px 16px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--warning-soft)',
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "triangle-alert",
      size: 17,
      color: "var(--warning)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        lineHeight: 1.55,
        color: 'var(--text-body)'
      }
    }, "Over the \u20AC603 Minijob ceiling. At this rate the engagement becomes a Midijob and full social contributions apply.")), model === 'Werkstudent' && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        padding: '14px 16px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-accent-soft)',
        border: '1px solid var(--gold-200)',
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "info",
      size: 17,
      color: "var(--gold-700)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        lineHeight: 1.55,
        color: 'var(--text-body)'
      }
    }, "Werkstudent status exempts you from health, care and unemployment contributions. Pension insurance of 9.3% still applies.")))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 40px 48px',
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      tone: "outline",
      style: {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        gap: 24,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield-alert",
      size: 26,
      color: "var(--danger)"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 'var(--fs-md)',
        color: 'var(--text-strong)',
        marginBottom: 8
      }
    }, "Freelance and self-employed work needs separate permission"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-base)',
        lineHeight: 1.6,
        color: 'var(--text-muted)',
        maxWidth: '80ch'
      }
    }, "A \xA716b permit covers employment, not self-employment. Freelancing generally requires approval from your Ausl\xE4nderbeh\xF6rde, and the wording on your permit is what governs. Kontrak asks for your permit wording during verification and routes engagements accordingly \u2014 but the decision sits with your authority, not with us.")), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => go('signup')
    }, "Check my permit"))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 40px 64px',
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      tone: "sunken"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 20
      }
    }, "How a year usually runs"), /*#__PURE__*/React.createElement(Stepper, {
      steps: ['Lecture period · 20 h/week', 'Semester break · full-time allowed', 'Lecture period · back to 20 h', '1 January · account resets'],
      current: 1
    }))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 40px 88px',
        maxWidth: 'var(--maxw-narrow)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 16
      }
    }, "Sources"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-sm)',
        lineHeight: 1.8,
        color: 'var(--text-muted)',
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", null, "\xA716b(3) Aufenthaltsgesetz \u2014 140 full / 280 half working days per calendar year, in force since 1 March 2024."), /*#__PURE__*/React.createElement("span", null, "Fifth Minimum Wage Adjustment Ordinance (MiLoV5) \u2014 \u20AC13.90 per hour from 1 January 2026, \u20AC14.60 from 1 January 2027."), /*#__PURE__*/React.createElement("span", null, "Geringf\xFCgigkeitsgrenze \u2014 \u20AC603 per month (\u20AC7,236 per year) in 2026, indexed to the minimum wage."), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-faint)',
        marginTop: 10
      }
    }, "This page is general information, not legal advice. Your residence permit, your Ausl\xE4nderbeh\xF6rde and your university international office govern your individual case."))));
  }
  Object.assign(window, {
    VisaRules
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/kontrak-website/js/visa-rules.jsx", error: String((e && e.message) || e) }); }

// export/kontrak-website/lib/kontrak-ds.js
try { (() => {
/* @ds-bundle: {"format":4,"namespace":"KontrakDesignSystem_5cbea0","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"LUCIDE_VERSION","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"GigCard","sourcePath":"components/marketplace/GigCard.jsx"},{"name":"Rating","sourcePath":"components/marketplace/Rating.jsx"},{"name":"StatTile","sourcePath":"components/marketplace/StatTile.jsx"},{"name":"Stepper","sourcePath":"components/navigation/Stepper.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"4e4feaadf6c5","components/core/Avatar.jsx":"b48df3b3396c","components/core/Badge.jsx":"48ac4abf5fd5","components/core/Button.jsx":"160e8b02e62d","components/core/Card.jsx":"b2f68996c8a1","components/core/Icon.jsx":"b7c9e2134845","components/core/IconButton.jsx":"98e6c34dba3f","components/core/Tag.jsx":"6085c783d741","components/feedback/Dialog.jsx":"4cff5883a40a","components/feedback/Toast.jsx":"23af77825ee9","components/feedback/Tooltip.jsx":"cd3282b1328d","components/forms/Checkbox.jsx":"a02062fd3017","components/forms/Field.jsx":"8ca0969b9fdc","components/forms/Input.jsx":"800d340bef70","components/forms/Radio.jsx":"22131476dc9b","components/forms/Select.jsx":"754045ae85f0","components/forms/Switch.jsx":"6b702f48f566","components/forms/Textarea.jsx":"752f50210016","components/marketplace/GigCard.jsx":"76f9943f0c53","components/marketplace/Rating.jsx":"632c27c7063d","components/marketplace/StatTile.jsx":"9b8f07498a16","components/navigation/Stepper.jsx":"38d5d7d1f18d","components/navigation/Tabs.jsx":"2b8c2940188d","ui_kits/app/Briefs.jsx":"4cc0543eb4a7","ui_kits/app/ContractDetail.jsx":"69e8c95fc6ad","ui_kits/app/Dashboard.jsx":"0de9af225fad","ui_kits/app/Messages.jsx":"588a1e18b6c6","ui_kits/app/Shell.jsx":"fcbee7f738e5","ui_kits/website/BrowseWork.jsx":"6ee030a3019a","ui_kits/website/Chrome.jsx":"8134455339fb","ui_kits/website/ForClients.jsx":"5894383b1f20","ui_kits/website/GigDetail.jsx":"fea6174de581","ui_kits/website/Home.jsx":"90b74a5ec6a2","ui_kits/website/Pricing.jsx":"295e92ad12d6","ui_kits/website/SignUp.jsx":"a031825ea5c3","ui_kits/website/VisaRules.jsx":"c5082ed1c56a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {
  const __ds_ns = window.KontrakDesignSystem_5cbea0 = window.KontrakDesignSystem_5cbea0 || {};
  const __ds_scope = {};
  __ds_ns.__errors = __ds_ns.__errors || [];

  // components/brand/Logo.jsx
  try {
    (() => {
      const MARK = {
        navy: {
          bg: '#0D1B2A',
          arm: '#C8922A',
          upper: '#fff'
        },
        onNavy: {
          bg: 'rgba(255,255,255,0.08)',
          arm: '#E4B35A',
          upper: '#fff'
        },
        onGold: {
          bg: 'rgba(255,255,255,0.15)',
          arm: 'rgba(255,255,255,0.55)',
          upper: '#fff'
        }
      };
      function Logo({
        variant = 'lockup',
        tone = 'navy',
        size = 40,
        tagline = true,
        className,
        style
      }) {
        const c = MARK[tone] || MARK.navy;
        const radius = size >= 64 ? 16 : size >= 32 ? 14 : 12;
        const mark = /*#__PURE__*/React.createElement("svg", {
          width: size,
          height: size,
          viewBox: "0 0 72 72",
          fill: "none",
          "aria-hidden": "true",
          style: {
            flexShrink: 0,
            filter: tone === 'navy' && size >= 64 ? 'drop-shadow(var(--shadow-lift))' : undefined
          }
        }, /*#__PURE__*/React.createElement("rect", {
          width: "72",
          height: "72",
          rx: radius,
          fill: c.bg
        }), /*#__PURE__*/React.createElement("rect", {
          x: "18",
          y: "15",
          width: "6",
          height: "42",
          rx: "1",
          fill: c.upper
        }), /*#__PURE__*/React.createElement("polygon", {
          points: "24,36 46,15 53,15 31,36",
          fill: c.upper
        }), /*#__PURE__*/React.createElement("polygon", {
          points: "24,36 46,57 53,57 31,36",
          fill: c.arm
        }));
        if (variant === 'mark') return /*#__PURE__*/React.createElement("span", {
          className: className,
          style: {
            display: 'inline-flex',
            ...style
          },
          title: "Kontrak"
        }, mark);
        const wmColor = tone === 'navy' ? 'var(--ink)' : '#fff';
        const accent = tone === 'navy' ? 'var(--gold-600)' : tone === 'onNavy' ? 'var(--gold-400)' : 'rgba(255,255,255,0.7)';
        const tagColor = tone === 'navy' ? 'var(--text-faint)' : 'rgba(255,255,255,0.45)';
        const wmSize = Math.round(size * 0.5);
        return /*#__PURE__*/React.createElement("span", {
          className: className,
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: Math.round(size * 0.3),
            ...style
          }
        }, mark, variant === 'lockup' && size >= 56 && /*#__PURE__*/React.createElement("span", {
          style: {
            width: 1.5,
            height: size * 0.72,
            background: 'var(--rule-fade)',
            flexShrink: 0
          }
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 4
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-display)',
            fontWeight: 'var(--fw-bold)',
            fontSize: wmSize,
            letterSpacing: wmSize >= 30 ? 'var(--ls-wordmark)' : 'var(--ls-wordmark-sm)',
            lineHeight: 1,
            color: wmColor
          }
        }, "KONTR", /*#__PURE__*/React.createElement("span", {
          style: {
            color: accent
          }
        }, "AK")), tagline && size >= 40 && /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--fs-micro)',
            letterSpacing: 'var(--ls-label-sm)',
            textTransform: 'uppercase',
            color: tagColor,
            paddingLeft: 2
          }
        }, "Work Legal \xB7 Work Smart")));
      }
      Object.assign(__ds_scope, {
        Logo
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/brand/Logo.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/core/Avatar.jsx
  try {
    (() => {
      const sizes = {
        xs: 24,
        sm: 32,
        md: 40,
        lg: 56,
        xl: 72
      };
      function Avatar({
        name = '',
        src,
        size = 'md',
        verified,
        style,
        className
      }) {
        const d = sizes[size] || size;
        const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
        return /*#__PURE__*/React.createElement("span", {
          className: className,
          style: {
            position: 'relative',
            display: 'inline-flex',
            flexShrink: 0,
            ...style
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            width: d,
            height: d,
            borderRadius: 'var(--radius-pill)',
            overflow: 'hidden',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--navy-800)',
            color: '#fff',
            fontFamily: 'var(--font-display)',
            fontWeight: 'var(--fw-bold)',
            fontSize: Math.max(9, Math.round(d * 0.36)),
            letterSpacing: '0.04em'
          }
        }, src ? /*#__PURE__*/React.createElement("img", {
          src: src,
          alt: name,
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }) : initials), verified && /*#__PURE__*/React.createElement("span", {
          title: "Identity verified",
          style: {
            position: 'absolute',
            right: -2,
            bottom: -2,
            width: Math.max(10, d * 0.34),
            height: Math.max(10, d * 0.34),
            borderRadius: '50%',
            background: 'var(--gold-600)',
            border: '2px solid var(--surface-card)'
          }
        }));
      }
      Object.assign(__ds_scope, {
        Avatar
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Avatar.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/core/Badge.jsx
  try {
    (() => {
      const tones = {
        neutral: {
          background: 'var(--parchment)',
          color: 'var(--text-muted)'
        },
        navy: {
          background: 'var(--navy-050)',
          color: 'var(--navy-700)'
        },
        gold: {
          background: 'var(--gold-100)',
          color: 'var(--gold-800)'
        },
        success: {
          background: 'var(--success-soft)',
          color: 'var(--success)'
        },
        warning: {
          background: 'var(--warning-soft)',
          color: 'var(--warning)'
        },
        danger: {
          background: 'var(--danger-soft)',
          color: 'var(--danger)'
        },
        solid: {
          background: 'var(--navy-900)',
          color: '#fff'
        }
      };
      function Badge({
        children,
        tone = 'neutral',
        dot,
        style,
        className
      }) {
        return /*#__PURE__*/React.createElement("span", {
          className: className,
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--fs-micro-plus)',
            fontWeight: 'var(--fw-medium)',
            letterSpacing: 'var(--ls-label-xs)',
            textTransform: 'uppercase',
            padding: '4px 10px',
            borderRadius: 'var(--radius-sm)',
            whiteSpace: 'nowrap',
            ...tones[tone],
            ...style
          }
        }, dot && /*#__PURE__*/React.createElement("span", {
          style: {
            width: 5,
            height: 5,
            borderRadius: '50%',
            background: 'currentColor',
            opacity: 0.8
          }
        }), children);
      }
      Object.assign(__ds_scope, {
        Badge
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Badge.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/core/Button.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      const base = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--fw-medium)',
        border: '1px solid transparent',
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        transition: 'var(--transition-ui)'
      };
      const sizes = {
        sm: {
          height: 32,
          padding: '0 14px',
          fontSize: 'var(--fs-sm)',
          letterSpacing: '0.02em'
        },
        md: {
          height: 40,
          padding: '0 20px',
          fontSize: 'var(--fs-base)'
        },
        lg: {
          height: 48,
          padding: '0 28px',
          fontSize: 'var(--fs-md)'
        }
      };
      const tones = {
        primary: {
          background: 'var(--navy-900)',
          color: '#fff'
        },
        accent: {
          background: 'var(--gold-600)',
          color: 'var(--text-on-gold)'
        },
        secondary: {
          background: 'var(--surface-card)',
          color: 'var(--text-strong)',
          borderColor: 'var(--border-strong)',
          boxShadow: 'var(--shadow-card)'
        },
        ghost: {
          background: 'transparent',
          color: 'var(--text-body)'
        },
        danger: {
          background: 'var(--danger)',
          color: '#fff'
        },
        onNavy: {
          background: 'rgba(255,255,255,0.10)',
          color: '#fff',
          borderColor: 'var(--border-inverse)'
        }
      };
      const hovers = {
        primary: {
          background: 'var(--navy-800)'
        },
        accent: {
          background: 'var(--gold-700)'
        },
        secondary: {
          background: 'var(--surface-hover)',
          borderColor: 'var(--stone-400)'
        },
        ghost: {
          background: 'var(--parchment)'
        },
        danger: {
          background: '#8E241C'
        },
        onNavy: {
          background: 'rgba(255,255,255,0.18)'
        }
      };
      function Button({
        children,
        variant = 'primary',
        size = 'md',
        block,
        disabled,
        iconLeft,
        iconRight,
        href,
        type = 'button',
        onClick,
        style,
        className,
        ...rest
      }) {
        const [hover, setHover] = React.useState(false);
        const [press, setPress] = React.useState(false);
        const El = href ? 'a' : 'button';
        const merged = {
          ...base,
          ...sizes[size],
          ...tones[variant],
          ...(hover && !disabled ? hovers[variant] : null),
          ...(press && !disabled ? {
            transform: 'translateY(1px)'
          } : null),
          ...(block ? {
            width: '100%'
          } : null),
          ...(disabled ? {
            opacity: 0.42,
            cursor: 'not-allowed',
            boxShadow: 'none'
          } : null),
          ...style
        };
        return /*#__PURE__*/React.createElement(El, _extends({
          className: className,
          href: href,
          type: href ? undefined : type,
          disabled: href ? undefined : disabled,
          onClick: disabled ? undefined : onClick,
          style: merged,
          onMouseEnter: () => setHover(true),
          onMouseLeave: () => {
            setHover(false);
            setPress(false);
          },
          onMouseDown: () => setPress(true),
          onMouseUp: () => setPress(false)
        }, rest), iconLeft, children, iconRight);
      }
      Object.assign(__ds_scope, {
        Button
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Button.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/core/Card.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      function Card({
        children,
        tone = 'default',
        padding = 'md',
        interactive,
        as = 'div',
        onClick,
        style,
        className,
        ...rest
      }) {
        const [hover, setHover] = React.useState(false);
        const El = as;
        const pads = {
          none: 0,
          sm: 20,
          md: 'var(--gutter-card)',
          lg: 48
        };
        const tones = {
          default: {
            background: 'var(--surface-card)',
            color: 'var(--text-body)',
            border: '1px solid transparent',
            boxShadow: 'var(--shadow-card)'
          },
          outline: {
            background: 'var(--surface-card)',
            color: 'var(--text-body)',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'none'
          },
          sunken: {
            background: 'var(--surface-sunken)',
            color: 'var(--text-body)',
            border: '1px solid transparent',
            boxShadow: 'none'
          },
          navy: {
            background: 'var(--surface-inverse)',
            color: 'var(--text-on-navy)',
            border: '1px solid var(--border-inverse)',
            boxShadow: 'none'
          },
          accent: {
            background: 'var(--surface-accent-soft)',
            color: 'var(--text-body)',
            border: '1px solid var(--gold-200)',
            boxShadow: 'none'
          }
        };
        return /*#__PURE__*/React.createElement(El, _extends({
          className: className,
          onClick: onClick,
          onMouseEnter: () => setHover(true),
          onMouseLeave: () => setHover(false),
          style: {
            borderRadius: 'var(--radius-md)',
            padding: pads[padding],
            transition: 'var(--transition-ui)',
            ...tones[tone],
            ...(interactive ? {
              cursor: 'pointer'
            } : null),
            ...(interactive && hover ? {
              boxShadow: 'var(--shadow-raised)',
              borderColor: tone === 'navy' ? 'rgba(255,255,255,0.22)' : 'var(--border-strong)'
            } : null),
            ...style
          }
        }, rest), children);
      }
      Object.assign(__ds_scope, {
        Card
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Card.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/core/Icon.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      const LUCIDE_VERSION = '0.474.0';
      const url = name => 'https://unpkg.com/lucide-static@' + LUCIDE_VERSION + '/icons/' + name + '.svg';
      function Icon({
        name,
        size = 18,
        strokeWidth = 1.5,
        color = 'currentColor',
        style,
        className,
        ...rest
      }) {
        return /*#__PURE__*/React.createElement("span", _extends({
          className: className,
          "aria-hidden": "true",
          "data-icon": name,
          style: {
            display: 'inline-block',
            width: size,
            height: size,
            flexShrink: 0,
            background: color,
            WebkitMaskImage: 'url(' + url(name) + ')',
            maskImage: 'url(' + url(name) + ')',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
            opacity: strokeWidth < 1.5 ? 0.9 : 1,
            ...style
          }
        }, rest));
      }
      Object.assign(__ds_scope, {
        LUCIDE_VERSION,
        Icon
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Icon.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/core/IconButton.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      const sizes = {
        sm: 28,
        md: 34,
        lg: 40
      };
      function IconButton({
        children,
        label,
        variant = 'ghost',
        size = 'md',
        disabled,
        onClick,
        style,
        className,
        ...rest
      }) {
        const [hover, setHover] = React.useState(false);
        const d = sizes[size];
        const tones = {
          ghost: {
            background: 'transparent',
            color: 'var(--text-muted)',
            borderColor: 'transparent'
          },
          outline: {
            background: 'var(--surface-card)',
            color: 'var(--text-body)',
            borderColor: 'var(--border-hairline)'
          },
          solid: {
            background: 'var(--navy-900)',
            color: '#fff',
            borderColor: 'transparent'
          },
          onNavy: {
            background: 'rgba(255,255,255,0.08)',
            color: '#fff',
            borderColor: 'var(--border-inverse)'
          }
        };
        const hovers = {
          ghost: {
            background: 'var(--parchment)',
            color: 'var(--text-strong)'
          },
          outline: {
            background: 'var(--surface-hover)',
            borderColor: 'var(--border-strong)'
          },
          solid: {
            background: 'var(--navy-800)'
          },
          onNavy: {
            background: 'rgba(255,255,255,0.16)'
          }
        };
        return /*#__PURE__*/React.createElement("button", _extends({
          type: "button",
          "aria-label": label,
          title: label,
          disabled: disabled,
          onClick: onClick,
          className: className,
          onMouseEnter: () => setHover(true),
          onMouseLeave: () => setHover(false),
          style: {
            width: d,
            height: d,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid transparent',
            borderRadius: 'var(--radius-md)',
            cursor: 'pointer',
            transition: 'var(--transition-ui)',
            ...tones[variant],
            ...(hover && !disabled ? hovers[variant] : null),
            ...(disabled ? {
              opacity: 0.42,
              cursor: 'not-allowed'
            } : null),
            ...style
          }
        }, rest), children);
      }
      Object.assign(__ds_scope, {
        IconButton
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/IconButton.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/core/Tag.jsx
  try {
    (() => {
      function Tag({
        children,
        selected,
        onClick,
        onRemove,
        style,
        className
      }) {
        const [hover, setHover] = React.useState(false);
        const clickable = !!onClick;
        return /*#__PURE__*/React.createElement("span", {
          className: className,
          onClick: onClick,
          role: clickable ? 'button' : undefined,
          onMouseEnter: () => setHover(true),
          onMouseLeave: () => setHover(false),
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--fs-sm)',
            fontWeight: 'var(--fw-regular)',
            padding: '5px 12px',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid ' + (selected ? 'var(--navy-900)' : 'var(--border-subtle)'),
            background: selected ? 'var(--navy-900)' : 'var(--surface-card)',
            color: selected ? '#fff' : 'var(--text-body)',
            cursor: clickable ? 'pointer' : 'default',
            transition: 'var(--transition-ui)',
            ...(hover && clickable && !selected ? {
              borderColor: 'var(--border-strong)',
              background: 'var(--surface-hover)'
            } : null),
            ...style
          }
        }, children, onRemove && /*#__PURE__*/React.createElement("span", {
          onClick: e => {
            e.stopPropagation();
            onRemove(e);
          },
          style: {
            cursor: 'pointer',
            opacity: 0.5,
            fontSize: 'var(--fs-sm)',
            lineHeight: 1
          }
        }, "\xD7"));
      }
      Object.assign(__ds_scope, {
        Tag
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Tag.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/feedback/Dialog.jsx
  try {
    (() => {
      function Dialog({
        open,
        title,
        eyebrow,
        children,
        footer,
        onClose,
        width = 480,
        style,
        className
      }) {
        if (!open) return null;
        return /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'fixed',
            inset: 0,
            zIndex: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(13,27,42,0.44)',
            backdropFilter: 'blur(3px)',
            padding: 24,
            animation: 'none'
          },
          onClick: onClose
        }, /*#__PURE__*/React.createElement("div", {
          className: className,
          onClick: e => e.stopPropagation(),
          role: "dialog",
          "aria-modal": "true",
          style: {
            width: '100%',
            maxWidth: width,
            background: 'var(--surface-card)',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-pop)',
            padding: 'var(--gutter-card)',
            ...style
          }
        }, eyebrow && /*#__PURE__*/React.createElement("div", {
          className: "k-label",
          style: {
            marginBottom: 10
          }
        }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
          style: {
            font: 'var(--fw-light) var(--fs-2xl)/1.25 var(--font-serif)',
            color: 'var(--text-strong)',
            marginBottom: 14
          }
        }, title), /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--fs-base)',
            lineHeight: 'var(--lh-body)',
            color: 'var(--text-body)'
          }
        }, children), footer && /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 10,
            marginTop: 28
          }
        }, footer)));
      }
      Object.assign(__ds_scope, {
        Dialog
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/feedback/Dialog.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/feedback/Toast.jsx
  try {
    (() => {
      const tones = {
        info: {
          border: 'var(--navy-100)',
          accent: 'var(--navy-600)'
        },
        success: {
          border: '#C7E0D5',
          accent: 'var(--success)'
        },
        warning: {
          border: 'var(--gold-200)',
          accent: 'var(--warning)'
        },
        danger: {
          border: '#E8C8C3',
          accent: 'var(--danger)'
        }
      };
      function Toast({
        title,
        children,
        tone = 'info',
        icon,
        onDismiss,
        style,
        className
      }) {
        const t = tones[tone];
        return /*#__PURE__*/React.createElement("div", {
          className: className,
          role: "status",
          style: {
            display: 'flex',
            gap: 12,
            alignItems: 'flex-start',
            minWidth: 280,
            maxWidth: 420,
            background: 'var(--surface-card)',
            border: '1px solid ' + t.border,
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-pop)',
            padding: '14px 16px',
            ...style
          }
        }, icon && /*#__PURE__*/React.createElement("span", {
          style: {
            color: t.accent,
            display: 'flex',
            marginTop: 1
          }
        }, icon), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 3
          }
        }, title && /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-display)',
            fontWeight: 'var(--fw-semibold)',
            fontSize: 'var(--fs-base)',
            color: 'var(--text-strong)'
          }
        }, title), children && /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--fs-sm)',
            lineHeight: 1.55,
            color: 'var(--text-muted)'
          }
        }, children)), onDismiss && /*#__PURE__*/React.createElement("span", {
          onClick: onDismiss,
          style: {
            cursor: 'pointer',
            color: 'var(--text-faint)',
            fontSize: 'var(--fs-md)',
            lineHeight: 1
          }
        }, "\xD7"));
      }
      Object.assign(__ds_scope, {
        Toast
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/feedback/Toast.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/feedback/Tooltip.jsx
  try {
    (() => {
      function Tooltip({
        label,
        children,
        placement = 'top',
        style,
        className
      }) {
        const [show, setShow] = React.useState(false);
        const pos = {
          top: {
            bottom: '100%',
            left: '50%',
            transform: 'translate(-50%,-8px)'
          },
          bottom: {
            top: '100%',
            left: '50%',
            transform: 'translate(-50%,8px)'
          },
          left: {
            right: '100%',
            top: '50%',
            transform: 'translate(-8px,-50%)'
          },
          right: {
            left: '100%',
            top: '50%',
            transform: 'translate(8px,-50%)'
          }
        }[placement];
        return /*#__PURE__*/React.createElement("span", {
          className: className,
          style: {
            position: 'relative',
            display: 'inline-flex',
            ...style
          },
          onMouseEnter: () => setShow(true),
          onMouseLeave: () => setShow(false)
        }, children, show && /*#__PURE__*/React.createElement("span", {
          style: {
            position: 'absolute',
            zIndex: 70,
            ...pos,
            background: 'var(--navy-900)',
            color: '#fff',
            borderRadius: 'var(--radius-sm)',
            padding: '6px 10px',
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--fs-sm)',
            lineHeight: 1.4,
            whiteSpace: 'nowrap',
            boxShadow: 'var(--shadow-lift)',
            pointerEvents: 'none'
          }
        }, label));
      }
      Object.assign(__ds_scope, {
        Tooltip
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/feedback/Tooltip.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/forms/Checkbox.jsx
  try {
    (() => {
      function Checkbox({
        label,
        description,
        checked,
        onChange,
        disabled,
        style,
        className
      }) {
        return /*#__PURE__*/React.createElement("label", {
          className: className,
          style: {
            display: 'flex',
            gap: 10,
            alignItems: description ? 'flex-start' : 'center',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.5 : 1,
            ...style
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            width: 18,
            height: 18,
            flexShrink: 0,
            marginTop: description ? 1 : 0,
            borderRadius: 'var(--radius-sm)',
            border: '1px solid ' + (checked ? 'var(--navy-900)' : 'var(--border-strong)'),
            background: checked ? 'var(--navy-900)' : 'var(--surface-card)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'var(--transition-ui)'
          }
        }, checked && /*#__PURE__*/React.createElement("svg", {
          width: "11",
          height: "11",
          viewBox: "0 0 12 12",
          fill: "none"
        }, /*#__PURE__*/React.createElement("path", {
          d: "M2.5 6.2 4.7 8.4 9.5 3.6",
          stroke: "#fff",
          strokeWidth: "1.6",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }))), /*#__PURE__*/React.createElement("input", {
          type: "checkbox",
          checked: !!checked,
          onChange: onChange,
          disabled: disabled,
          style: {
            position: 'absolute',
            opacity: 0,
            width: 0,
            height: 0
          }
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--fs-base)',
            color: 'var(--text-body)'
          }
        }, label), description && /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 'var(--fs-sm)',
            color: 'var(--text-muted)',
            lineHeight: 1.5
          }
        }, description)));
      }
      Object.assign(__ds_scope, {
        Checkbox
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/Checkbox.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/forms/Field.jsx
  try {
    (() => {
      function Field({
        label,
        hint,
        error,
        required,
        htmlFor,
        children,
        style,
        className
      }) {
        return /*#__PURE__*/React.createElement("div", {
          className: className,
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            ...style
          }
        }, label && /*#__PURE__*/React.createElement("label", {
          htmlFor: htmlFor,
          style: {
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--fs-micro-plus)',
            letterSpacing: 'var(--ls-label-xs)',
            textTransform: 'uppercase',
            color: 'var(--text-muted)'
          }
        }, label, required && /*#__PURE__*/React.createElement("span", {
          style: {
            color: 'var(--gold-600)'
          }
        }, " *")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 'var(--fs-sm)',
            color: error ? 'var(--danger)' : 'var(--text-muted)',
            lineHeight: 1.5
          }
        }, error || hint));
      }
      Object.assign(__ds_scope, {
        Field
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/Field.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/forms/Input.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      const inputShell = (invalid, focus, disabled) => ({
        width: '100%',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-base)',
        color: 'var(--text-strong)',
        background: disabled ? 'var(--parchment)' : 'var(--surface-card)',
        border: '1px solid ' + (invalid ? 'var(--danger)' : focus ? 'var(--navy-500)' : 'var(--border-strong)'),
        borderRadius: 'var(--radius-md)',
        outline: 'none',
        boxShadow: focus ? '0 0 0 3px rgba(200,146,42,0.18)' : 'none',
        transition: 'var(--transition-ui)',
        opacity: disabled ? 0.6 : 1
      });
      function Input({
        invalid,
        disabled,
        iconLeft,
        size = 'md',
        style,
        className,
        ...rest
      }) {
        const [focus, setFocus] = React.useState(false);
        const h = size === 'sm' ? 34 : size === 'lg' ? 48 : 40;
        const input = /*#__PURE__*/React.createElement("input", _extends({
          disabled: disabled,
          className: className,
          onFocus: () => setFocus(true),
          onBlur: () => setFocus(false),
          style: {
            ...inputShell(invalid, focus, disabled),
            height: h,
            padding: iconLeft ? '0 14px 0 38px' : '0 14px',
            ...style
          }
        }, rest));
        if (!iconLeft) return input;
        return /*#__PURE__*/React.createElement("span", {
          style: {
            position: 'relative',
            display: 'block',
            width: '100%'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            position: 'absolute',
            left: 13,
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--text-faint)',
            display: 'flex'
          }
        }, iconLeft), input);
      }
      Object.assign(__ds_scope, {
        Input
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/Input.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/forms/Radio.jsx
  try {
    (() => {
      function Radio({
        label,
        description,
        checked,
        onChange,
        name,
        value,
        disabled,
        style,
        className
      }) {
        return /*#__PURE__*/React.createElement("label", {
          className: className,
          style: {
            display: 'flex',
            gap: 10,
            alignItems: description ? 'flex-start' : 'center',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.5 : 1,
            ...style
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            width: 18,
            height: 18,
            flexShrink: 0,
            marginTop: description ? 1 : 0,
            borderRadius: '50%',
            border: '1px solid ' + (checked ? 'var(--navy-900)' : 'var(--border-strong)'),
            background: 'var(--surface-card)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'var(--transition-ui)'
          }
        }, checked && /*#__PURE__*/React.createElement("span", {
          style: {
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: 'var(--navy-900)'
          }
        })), /*#__PURE__*/React.createElement("input", {
          type: "radio",
          name: name,
          value: value,
          checked: !!checked,
          onChange: onChange,
          disabled: disabled,
          style: {
            position: 'absolute',
            opacity: 0,
            width: 0,
            height: 0
          }
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--fs-base)',
            color: 'var(--text-body)'
          }
        }, label), description && /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 'var(--fs-sm)',
            color: 'var(--text-muted)',
            lineHeight: 1.5
          }
        }, description)));
      }
      Object.assign(__ds_scope, {
        Radio
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/Radio.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/forms/Select.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      const selectShell = (invalid, focus, disabled) => ({
        width: '100%',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-base)',
        color: 'var(--text-strong)',
        background: disabled ? 'var(--parchment)' : 'var(--surface-card)',
        border: '1px solid ' + (invalid ? 'var(--danger)' : focus ? 'var(--navy-500)' : 'var(--border-strong)'),
        borderRadius: 'var(--radius-md)',
        outline: 'none',
        boxShadow: focus ? '0 0 0 3px rgba(200,146,42,0.18)' : 'none',
        transition: 'var(--transition-ui)',
        opacity: disabled ? 0.6 : 1
      });
      function Select({
        options = [],
        invalid,
        disabled,
        placeholder,
        size = 'md',
        style,
        className,
        ...rest
      }) {
        const [focus, setFocus] = React.useState(false);
        const h = size === 'sm' ? 34 : size === 'lg' ? 48 : 40;
        return /*#__PURE__*/React.createElement("span", {
          style: {
            position: 'relative',
            display: 'block',
            width: '100%'
          }
        }, /*#__PURE__*/React.createElement("select", _extends({
          disabled: disabled,
          className: className,
          onFocus: () => setFocus(true),
          onBlur: () => setFocus(false),
          style: {
            ...selectShell(invalid, focus, disabled),
            height: h,
            padding: '0 34px 0 14px',
            appearance: 'none',
            cursor: 'pointer',
            ...style
          }
        }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
          value: ""
        }, placeholder), options.map(o => {
          const v = typeof o === 'string' ? o : o.value;
          const l = typeof o === 'string' ? o : o.label;
          return /*#__PURE__*/React.createElement("option", {
            key: v,
            value: v
          }, l);
        })), /*#__PURE__*/React.createElement("span", {
          style: {
            position: 'absolute',
            right: 13,
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            color: 'var(--text-faint)',
            fontSize: 10
          }
        }, "\u25BE"));
      }
      Object.assign(__ds_scope, {
        Select
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/Select.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/forms/Switch.jsx
  try {
    (() => {
      function Switch({
        checked,
        onChange,
        label,
        disabled,
        style,
        className
      }) {
        return /*#__PURE__*/React.createElement("label", {
          className: className,
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.5 : 1,
            ...style
          }
        }, /*#__PURE__*/React.createElement("span", {
          onClick: () => !disabled && onChange && onChange(!checked),
          style: {
            width: 38,
            height: 22,
            borderRadius: 'var(--radius-pill)',
            padding: 2,
            flexShrink: 0,
            background: checked ? 'var(--gold-600)' : 'var(--stone-300)',
            transition: 'background-color var(--dur-base) var(--ease-out)',
            display: 'inline-flex',
            alignItems: 'center'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            width: 18,
            height: 18,
            borderRadius: '50%',
            background: '#fff',
            boxShadow: 'var(--shadow-card)',
            transform: 'translateX(' + (checked ? 16 : 0) + 'px)',
            transition: 'transform var(--dur-base) var(--ease-out)'
          }
        })), label && /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--fs-base)',
            color: 'var(--text-body)'
          }
        }, label));
      }
      Object.assign(__ds_scope, {
        Switch
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/Switch.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/forms/Textarea.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      const textareaShell = (invalid, focus, disabled) => ({
        width: '100%',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-base)',
        color: 'var(--text-strong)',
        background: disabled ? 'var(--parchment)' : 'var(--surface-card)',
        border: '1px solid ' + (invalid ? 'var(--danger)' : focus ? 'var(--navy-500)' : 'var(--border-strong)'),
        borderRadius: 'var(--radius-md)',
        outline: 'none',
        boxShadow: focus ? '0 0 0 3px rgba(200,146,42,0.18)' : 'none',
        transition: 'var(--transition-ui)',
        opacity: disabled ? 0.6 : 1
      });
      function Textarea({
        invalid,
        disabled,
        rows = 4,
        style,
        className,
        ...rest
      }) {
        const [focus, setFocus] = React.useState(false);
        return /*#__PURE__*/React.createElement("textarea", _extends({
          rows: rows,
          disabled: disabled,
          className: className,
          onFocus: () => setFocus(true),
          onBlur: () => setFocus(false),
          style: {
            ...textareaShell(invalid, focus, disabled),
            padding: '12px 14px',
            lineHeight: 'var(--lh-body)',
            resize: 'vertical',
            ...style
          }
        }, rest));
      }
      Object.assign(__ds_scope, {
        Textarea
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/Textarea.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/marketplace/Rating.jsx
  try {
    (() => {
      function Rating({
        value = 0,
        count,
        size = 13,
        style,
        className
      }) {
        const full = Math.round(value * 2) / 2;
        return /*#__PURE__*/React.createElement("span", {
          className: className,
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            ...style
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'inline-flex',
            gap: 2
          }
        }, [1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement("span", {
          key: i,
          style: {
            position: 'relative',
            width: size,
            height: size,
            display: 'inline-block'
          }
        }, /*#__PURE__*/React.createElement("svg", {
          viewBox: "0 0 20 20",
          width: size,
          height: size,
          style: {
            position: 'absolute',
            inset: 0
          }
        }, /*#__PURE__*/React.createElement("path", {
          d: "M10 1.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.6 7.7l5.8-.8L10 1.6z",
          fill: full >= i ? 'var(--gold-600)' : full >= i - 0.5 ? 'var(--gold-300)' : 'var(--stone-300)'
        }))))), /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--fs-sm)',
            color: 'var(--text-muted)'
          }
        }, value.toFixed(1), count != null && /*#__PURE__*/React.createElement("span", {
          style: {
            color: 'var(--text-faint)'
          }
        }, " (", count, ")")));
      }
      Object.assign(__ds_scope, {
        Rating
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/marketplace/Rating.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/marketplace/GigCard.jsx
  try {
    (() => {
      function GigCard({
        title,
        client,
        rate,
        period,
        location,
        tags = [],
        badge,
        rating,
        reviews,
        posted,
        onClick,
        style,
        className
      }) {
        const [hover, setHover] = React.useState(false);
        return /*#__PURE__*/React.createElement("div", {
          className: className,
          onClick: onClick,
          onMouseEnter: () => setHover(true),
          onMouseLeave: () => setHover(false),
          style: {
            background: 'var(--surface-card)',
            borderRadius: 'var(--radius-md)',
            padding: 24,
            border: '1px solid ' + (hover ? 'var(--border-strong)' : 'transparent'),
            boxShadow: hover ? 'var(--shadow-raised)' : 'var(--shadow-card)',
            cursor: onClick ? 'pointer' : 'default',
            transition: 'var(--transition-ui)',
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            ...style
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            gap: 16,
            alignItems: 'flex-start'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 12
          }
        }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
          name: client,
          size: "md",
          verified: true
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 3
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-display)',
            fontWeight: 'var(--fw-semibold)',
            fontSize: 'var(--fs-md)',
            color: 'var(--text-strong)',
            lineHeight: 1.3
          }
        }, title), /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--fs-sm)',
            color: 'var(--text-muted)'
          }
        }, client, location ? ' · ' + location : ''))), badge && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
          tone: "gold"
        }, badge)), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 6
          }
        }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
          key: t
        }, t))), /*#__PURE__*/React.createElement("div", {
          style: {
            height: 1,
            background: 'var(--border-hairline)'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-display)',
            fontWeight: 'var(--fw-bold)',
            fontSize: 'var(--fs-lg)',
            color: 'var(--text-strong)'
          }
        }, rate, period && /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-body)',
            fontWeight: 'var(--fw-regular)',
            fontSize: 'var(--fs-sm)',
            color: 'var(--text-muted)'
          }
        }, " / ", period)), rating != null ? /*#__PURE__*/React.createElement(__ds_scope.Rating, {
          value: rating,
          count: reviews
        }) : posted ? /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 'var(--fs-sm)',
            color: 'var(--text-faint)'
          }
        }, posted) : null));
      }
      Object.assign(__ds_scope, {
        GigCard
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/marketplace/GigCard.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/marketplace/StatTile.jsx
  try {
    (() => {
      function StatTile({
        label,
        value,
        delta,
        tone = 'default',
        style,
        className
      }) {
        const inverse = tone === 'navy';
        return /*#__PURE__*/React.createElement("div", {
          className: className,
          style: {
            background: inverse ? 'var(--surface-inverse)' : 'var(--surface-card)',
            border: '1px solid ' + (inverse ? 'var(--border-inverse)' : 'transparent'),
            boxShadow: inverse ? 'none' : 'var(--shadow-card)',
            borderRadius: 'var(--radius-md)',
            padding: '20px 22px',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            ...style
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--fs-micro-plus)',
            letterSpacing: 'var(--ls-label-sm)',
            textTransform: 'uppercase',
            color: inverse ? 'var(--text-on-navy-muted)' : 'var(--text-faint)'
          }
        }, label), /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-display)',
            fontWeight: 'var(--fw-bold)',
            fontSize: 'var(--fs-3xl)',
            lineHeight: 1,
            letterSpacing: 'var(--ls-tight)',
            color: inverse ? '#fff' : 'var(--text-strong)'
          }
        }, value), delta && /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--fs-sm)',
            color: inverse ? 'var(--gold-400)' : 'var(--success)'
          }
        }, delta));
      }
      Object.assign(__ds_scope, {
        StatTile
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/marketplace/StatTile.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/navigation/Stepper.jsx
  try {
    (() => {
      function Stepper({
        steps = [],
        current = 0,
        style,
        className
      }) {
        return /*#__PURE__*/React.createElement("div", {
          className: className,
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            ...style
          }
        }, steps.map((label, i) => {
          const done = i < current,
            on = i === current;
          return /*#__PURE__*/React.createElement(React.Fragment, {
            key: label
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: 10
            }
          }, /*#__PURE__*/React.createElement("span", {
            style: {
              width: 24,
              height: 24,
              borderRadius: '50%',
              flexShrink: 0,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--fs-xs)',
              fontWeight: 'var(--fw-bold)',
              background: done ? 'var(--gold-600)' : on ? 'var(--navy-900)' : 'transparent',
              color: done || on ? '#fff' : 'var(--text-faint)',
              border: '1px solid ' + (done ? 'var(--gold-600)' : on ? 'var(--navy-900)' : 'var(--border-strong)')
            }
          }, done ? '✓' : i + 1), /*#__PURE__*/React.createElement("span", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)',
              letterSpacing: '0.01em',
              color: on ? 'var(--text-strong)' : 'var(--text-muted)',
              fontWeight: on ? 'var(--fw-medium)' : 'var(--fw-regular)',
              whiteSpace: 'nowrap'
            }
          }, label)), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
            style: {
              flex: 1,
              height: 1,
              background: 'var(--border-hairline)',
              margin: '0 16px',
              minWidth: 24
            }
          }));
        }));
      }
      Object.assign(__ds_scope, {
        Stepper
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/navigation/Stepper.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/navigation/Tabs.jsx
  try {
    (() => {
      function Tabs({
        items = [],
        value,
        onChange,
        variant = 'underline',
        style,
        className
      }) {
        const active = value != null ? value : items[0] && (items[0].value || items[0]);
        const get = t => typeof t === 'string' ? {
          value: t,
          label: t
        } : t;
        if (variant === 'segmented') {
          return /*#__PURE__*/React.createElement("div", {
            className: className,
            style: {
              display: 'inline-flex',
              gap: 2,
              padding: 3,
              background: 'var(--parchment)',
              borderRadius: 'var(--radius-md)',
              ...style
            }
          }, items.map(raw => {
            const t = get(raw);
            const on = t.value === active;
            return /*#__PURE__*/React.createElement("button", {
              key: t.value,
              type: "button",
              onClick: () => onChange && onChange(t.value),
              style: {
                border: 'none',
                cursor: 'pointer',
                borderRadius: 'var(--radius-sm)',
                padding: '7px 16px',
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--fs-sm)',
                fontWeight: 'var(--fw-medium)',
                background: on ? 'var(--surface-card)' : 'transparent',
                color: on ? 'var(--text-strong)' : 'var(--text-muted)',
                boxShadow: on ? 'var(--shadow-card)' : 'none',
                transition: 'var(--transition-ui)'
              }
            }, t.label);
          }));
        }
        return /*#__PURE__*/React.createElement("div", {
          className: className,
          style: {
            display: 'flex',
            gap: 28,
            borderBottom: '1px solid var(--border-hairline)',
            ...style
          }
        }, items.map(raw => {
          const t = get(raw);
          const on = t.value === active;
          return /*#__PURE__*/React.createElement("button", {
            key: t.value,
            type: "button",
            onClick: () => onChange && onChange(t.value),
            style: {
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              padding: '0 0 12px',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-base)',
              fontWeight: on ? 'var(--fw-medium)' : 'var(--fw-regular)',
              color: on ? 'var(--text-strong)' : 'var(--text-muted)',
              borderBottom: '2px solid ' + (on ? 'var(--gold-600)' : 'transparent'),
              marginBottom: -1,
              transition: 'var(--transition-ui)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8
            }
          }, t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
            style: {
              fontSize: 'var(--fs-xs)',
              color: 'var(--text-faint)'
            }
          }, t.count));
        }));
      }
      Object.assign(__ds_scope, {
        Tabs
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/navigation/Tabs.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/app/Briefs.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      (function () {
        const {
          Card,
          Input,
          Select,
          Tag,
          Switch,
          Icon,
          GigCard,
          Button,
          Tabs
        } = window.KontrakDesignSystem_5cbea0;
        const ROWS = [{
          title: 'Research memo: data transfers post-adequacy',
          client: 'Halden & Co',
          location: 'Remote · EU',
          rate: '£560',
          period: 'fixed',
          tags: ['Privacy', 'Research'],
          badge: 'Visa-safe',
          rating: 5.0,
          reviews: 9
        }, {
          title: 'Trademark filing support — 6 classes',
          client: 'Studio Mor',
          location: 'Remote',
          rate: '£300',
          period: 'fixed',
          tags: ['IP', 'Filings'],
          rating: 4.8,
          reviews: 6
        }, {
          title: 'Tenancy dispute bundle preparation',
          client: 'Bright Legal Aid',
          location: 'Manchester',
          rate: '£24',
          period: 'hour',
          tags: ['Litigation'],
          rating: 4.4,
          reviews: 31
        }, {
          title: 'Employment policy refresh for 40 staff',
          client: 'Kelvin Foods',
          location: 'Leeds',
          rate: '£480',
          period: 'fixed',
          tags: ['Employment'],
          badge: 'Visa-safe',
          rating: 4.6,
          reviews: 12
        }];
        function Briefs({
          go
        }) {
          const [areas, setAreas] = React.useState(['Privacy']);
          const [visaOnly, setVisaOnly] = React.useState(false);
          const [tab, setTab] = React.useState('matched');
          const toggle = a => setAreas(areas.includes(a) ? areas.filter(x => x !== a) : [...areas, a]);
          const rows = visaOnly ? ROWS.filter(r => r.badge) : ROWS;
          return /*#__PURE__*/React.createElement("div", {
            style: {
              padding: '24px 32px 48px',
              display: 'flex',
              gap: 20,
              alignItems: 'start'
            }
          }, /*#__PURE__*/React.createElement(Card, {
            style: {
              width: 248,
              flexShrink: 0,
              position: 'sticky',
              top: 24
            },
            padding: "sm"
          }, /*#__PURE__*/React.createElement("div", {
            className: "k-label",
            style: {
              marginBottom: 14
            }
          }, "Filters"), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 16
            }
          }, /*#__PURE__*/React.createElement(Select, {
            placeholder: "All jurisdictions",
            options: ['England & Wales', 'New York', 'Ontario', 'EU'],
            size: "sm"
          }), /*#__PURE__*/React.createElement(Select, {
            placeholder: "Any fee type",
            options: ['Fixed fee', 'Hourly', 'Retainer'],
            size: "sm"
          }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
            className: "k-label",
            style: {
              marginBottom: 10
            }
          }, "Practice area"), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexWrap: 'wrap',
              gap: 6
            }
          }, ['Privacy', 'IP', 'Litigation', 'Employment', 'Corporate', 'Commercial'].map(a => /*#__PURE__*/React.createElement(Tag, {
            key: a,
            selected: areas.includes(a),
            onClick: () => toggle(a)
          }, a)))), /*#__PURE__*/React.createElement("div", {
            style: {
              height: 1,
              background: 'var(--border-hairline)'
            }
          }), /*#__PURE__*/React.createElement(Switch, {
            checked: visaOnly,
            onChange: setVisaOnly,
            label: "Visa-safe only"
          }), /*#__PURE__*/React.createElement(Button, {
            variant: "secondary",
            size: "sm",
            block: true
          }, "Reset"))), /*#__PURE__*/React.createElement("div", {
            style: {
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 16
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              gap: 12
            }
          }, /*#__PURE__*/React.createElement(Input, {
            placeholder: "Search briefs, clients, practice areas\u2026",
            iconLeft: /*#__PURE__*/React.createElement(Icon, {
              name: "search",
              size: 15
            })
          }), /*#__PURE__*/React.createElement(Select, {
            options: ['Newest first', 'Highest fee', 'Fewest bids'],
            style: {
              width: 180
            }
          })), /*#__PURE__*/React.createElement(Tabs, {
            value: tab,
            onChange: setTab,
            items: [{
              value: 'matched',
              label: 'Matched',
              count: rows.length
            }, {
              value: 'all',
              label: 'All open',
              count: 34
            }, {
              value: 'saved',
              label: 'Saved',
              count: 4
            }]
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 12
            }
          }, rows.map(r => /*#__PURE__*/React.createElement(GigCard, _extends({
            key: r.title
          }, r, {
            onClick: () => go('contracts')
          }))))));
        }
        Object.assign(window, {
          Briefs
        });
      })();
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/app/Briefs.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/app/ContractDetail.jsx
  try {
    (() => {
      (function () {
        const {
          Card,
          Badge,
          Button,
          Icon,
          Stepper,
          Avatar,
          Dialog,
          Toast,
          Field,
          Input,
          Checkbox
        } = window.KontrakDesignSystem_5cbea0;
        function ContractDetail({
          go
        }) {
          const [open, setOpen] = React.useState(false);
          const [released, setReleased] = React.useState(false);
          const [agree, setAgree] = React.useState(false);
          return /*#__PURE__*/React.createElement("div", {
            style: {
              padding: '24px 32px 48px',
              display: 'grid',
              gridTemplateColumns: '1.6fr 0.85fr',
              gap: 20,
              alignItems: 'start'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 20
            }
          }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: 20,
              marginBottom: 22
            }
          }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
            className: "k-label",
            style: {
              marginBottom: 10
            }
          }, "Engagement letter \xB7 KTK-2026-0413"), /*#__PURE__*/React.createElement("h2", {
            style: {
              font: '300 26px/1.25 var(--font-serif)',
              color: 'var(--text-strong)',
              marginBottom: 10
            }
          }, "Review a SaaS reseller agreement"), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              gap: 8
            }
          }, /*#__PURE__*/React.createElement(Badge, {
            tone: "success",
            dot: true
          }, "Escrow funded"), /*#__PURE__*/React.createElement(Badge, {
            tone: "navy"
          }, "Signed 04 Sep"))), /*#__PURE__*/React.createElement(Button, {
            variant: "secondary",
            size: "sm",
            iconLeft: /*#__PURE__*/React.createElement(Icon, {
              name: "download",
              size: 14
            })
          }, "PDF")), /*#__PURE__*/React.createElement(Stepper, {
            steps: ['Scope', 'Bid accepted', 'Contract signed', 'Escrow released'],
            current: released ? 3 : 2
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              height: 1,
              background: 'var(--border-hairline)',
              margin: '24px 0'
            }
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: 18
            }
          }, [['Fee', '£420 fixed'], ['Hours billed', '6.0 of 12'], ['Deadline', '12 Sep 2026'], ['Jurisdiction', 'England & Wales']].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
            key: l
          }, /*#__PURE__*/React.createElement("div", {
            className: "k-label",
            style: {
              marginBottom: 5
            }
          }, l), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-base)',
              color: 'var(--text-strong)'
            }
          }, v))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
            className: "k-label",
            style: {
              marginBottom: 16
            }
          }, "Time log"), [['05 Sep', 'First-pass mark-up', '2.5 h'], ['06 Sep', 'Risk note draft', '2.0 h'], ['08 Sep', 'Call with GC + revisions', '1.5 h']].map(([d, n, h]) => /*#__PURE__*/React.createElement("div", {
            key: n,
            style: {
              display: 'flex',
              gap: 16,
              alignItems: 'center',
              padding: '12px 0',
              borderTop: '1px solid var(--border-hairline)',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-base)'
            }
          }, /*#__PURE__*/React.createElement("span", {
            style: {
              width: 64,
              color: 'var(--text-faint)',
              fontSize: 'var(--fs-sm)'
            }
          }, d), /*#__PURE__*/React.createElement("span", {
            style: {
              flex: 1,
              color: 'var(--text-body)'
            }
          }, n), /*#__PURE__*/React.createElement("span", {
            style: {
              color: 'var(--text-strong)',
              fontFamily: 'var(--font-display)',
              fontWeight: 600
            }
          }, h))), /*#__PURE__*/React.createElement(Button, {
            variant: "ghost",
            size: "sm",
            style: {
              marginTop: 12
            },
            iconLeft: /*#__PURE__*/React.createElement(Icon, {
              name: "plus",
              size: 14
            })
          }, "Log time")), /*#__PURE__*/React.createElement(Card, {
            tone: "sunken"
          }, /*#__PURE__*/React.createElement("div", {
            className: "k-label",
            style: {
              marginBottom: 14
            }
          }, "Clause 4 \xB7 Scope of work"), /*#__PURE__*/React.createElement("p", {
            style: {
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'var(--fs-md)',
              lineHeight: 1.75,
              color: 'var(--text-body)'
            }
          }, "The Consultant shall deliver a marked-up copy of the Reseller Agreement together with a written risk note of no more than one page, identifying provisions that materially depart from market standard in the Client's sector."))), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              position: 'sticky',
              top: 24
            }
          }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
            className: "k-label",
            style: {
              marginBottom: 14
            }
          }, "Escrow"), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'var(--fs-4xl)',
              color: 'var(--text-strong)',
              lineHeight: 1,
              marginBottom: 8
            }
          }, "\xA3420"), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)',
              color: 'var(--text-muted)',
              marginBottom: 20
            }
          }, released ? 'Released 08 Sep · arriving in 1–2 days' : 'Held since 04 Sep · releases on client sign-off'), /*#__PURE__*/React.createElement(Button, {
            variant: "accent",
            block: true,
            disabled: released,
            onClick: () => setOpen(true)
          }, released ? 'Released' : 'Request release')), /*#__PURE__*/React.createElement(Card, {
            padding: "sm"
          }, /*#__PURE__*/React.createElement("div", {
            className: "k-label",
            style: {
              marginBottom: 14
            }
          }, "Client"), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              gap: 12,
              alignItems: 'center',
              marginBottom: 14
            }
          }, /*#__PURE__*/React.createElement(Avatar, {
            name: "Northlane Studio",
            verified: true
          }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'var(--fs-base)'
            }
          }, "Northlane Studio"), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)',
              color: 'var(--text-muted)'
            }
          }, "Dana Whitlock \xB7 GC"))), /*#__PURE__*/React.createElement(Button, {
            variant: "secondary",
            size: "sm",
            block: true,
            onClick: () => go('messages'),
            iconLeft: /*#__PURE__*/React.createElement(Icon, {
              name: "message-square",
              size: 14
            })
          }, "Message"))), /*#__PURE__*/React.createElement(Dialog, {
            open: open,
            eyebrow: "Escrow",
            title: "Request release of \xA3420?",
            onClose: () => setOpen(false),
            footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
              variant: "ghost",
              onClick: () => setOpen(false)
            }, "Not yet"), /*#__PURE__*/React.createElement(Button, {
              variant: "accent",
              disabled: !agree,
              onClick: () => {
                setOpen(false);
                setReleased(true);
              }
            }, "Request release"))
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 16
            }
          }, /*#__PURE__*/React.createElement("p", null, "Northlane Studio has 3 working days to raise an issue. After that, funds release automatically."), /*#__PURE__*/React.createElement(Field, {
            label: "Delivery note",
            htmlFor: "dn"
          }, /*#__PURE__*/React.createElement(Input, {
            id: "dn",
            defaultValue: "Mark-up + risk note delivered 08 Sep"
          })), /*#__PURE__*/React.createElement(Checkbox, {
            checked: agree,
            onChange: () => setAgree(!agree),
            label: "The deliverable is complete and matches clause 4"
          }))), released && /*#__PURE__*/React.createElement("div", {
            style: {
              position: 'fixed',
              right: 24,
              bottom: 24,
              zIndex: 80
            }
          }, /*#__PURE__*/React.createElement(Toast, {
            tone: "success",
            title: "Release requested",
            icon: /*#__PURE__*/React.createElement(Icon, {
              name: "check-circle"
            }),
            onDismiss: () => setReleased(true)
          }, "We've notified Dana. You'll be paid on approval.")));
        }
        Object.assign(window, {
          ContractDetail
        });
      })();
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/app/ContractDetail.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/app/Dashboard.jsx
  try {
    (() => {
      (function () {
        const {
          Card,
          StatTile,
          Badge,
          Button,
          Icon,
          GigCard,
          Stepper,
          Tabs,
          Avatar
        } = window.KontrakDesignSystem_5cbea0;
        function Dashboard({
          go
        }) {
          const [tab, setTab] = React.useState('active');
          return /*#__PURE__*/React.createElement("div", {
            style: {
              padding: '28px 32px 48px',
              display: 'flex',
              flexDirection: 'column',
              gap: 20
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: 16
            }
          }, /*#__PURE__*/React.createElement(StatTile, {
            label: "In escrow",
            value: "\xA31,240",
            delta: "+\xA3480 this week"
          }), /*#__PURE__*/React.createElement(StatTile, {
            label: "Paid out (2026)",
            value: "\xA38,610"
          }), /*#__PURE__*/React.createElement(StatTile, {
            label: "Hours logged",
            value: "126"
          }), /*#__PURE__*/React.createElement(StatTile, {
            tone: "navy",
            label: "Open bids",
            value: "3",
            delta: "1 awaiting reply"
          })), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'grid',
              gridTemplateColumns: '1.5fr 1fr',
              gap: 20,
              alignItems: 'start'
            }
          }, /*#__PURE__*/React.createElement(Card, {
            padding: "none"
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              padding: '22px 24px 0'
            }
          }, /*#__PURE__*/React.createElement(Tabs, {
            value: tab,
            onChange: setTab,
            items: [{
              value: 'active',
              label: 'Active work',
              count: 2
            }, {
              value: 'bids',
              label: 'My bids',
              count: 3
            }, {
              value: 'done',
              label: 'Completed',
              count: 11
            }]
          })), /*#__PURE__*/React.createElement("div", {
            style: {
              padding: 24,
              display: 'flex',
              flexDirection: 'column',
              gap: 18
            }
          }, [{
            title: 'Review a SaaS reseller agreement',
            client: 'Northlane Studio',
            step: 2,
            fee: '£420',
            due: 'Due 12 Sep',
            badge: ['Escrow funded', 'success']
          }, {
            title: 'Draft an NDA pack for a seed round',
            client: 'Ferrow Legal',
            step: 1,
            fee: '£38 / h',
            due: 'Due 20 Sep',
            badge: ['Awaiting signature', 'warning']
          }].map(w => /*#__PURE__*/React.createElement("div", {
            key: w.title,
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              paddingBottom: 18,
              borderBottom: '1px solid var(--border-hairline)'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              gap: 16,
              alignItems: 'flex-start'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              gap: 12
            }
          }, /*#__PURE__*/React.createElement(Avatar, {
            name: w.client,
            verified: true
          }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'var(--fs-md)',
              color: 'var(--text-strong)'
            }
          }, w.title), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)',
              color: 'var(--text-muted)',
              marginTop: 3
            }
          }, w.client, " \xB7 ", w.due))), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              gap: 10,
              alignItems: 'center'
            }
          }, /*#__PURE__*/React.createElement(Badge, {
            tone: w.badge[1],
            dot: true
          }, w.badge[0]), /*#__PURE__*/React.createElement("span", {
            style: {
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'var(--fs-md)',
              color: 'var(--text-strong)'
            }
          }, w.fee))), /*#__PURE__*/React.createElement(Stepper, {
            steps: ['Scope', 'Bid accepted', 'Contract signed', 'Escrow released'],
            current: w.step
          }))), /*#__PURE__*/React.createElement(Button, {
            variant: "ghost",
            size: "sm",
            style: {
              alignSelf: 'flex-start'
            },
            onClick: () => go('contracts'),
            iconRight: /*#__PURE__*/React.createElement(Icon, {
              name: "arrow-right",
              size: 14
            })
          }, "Open contracts"))), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 20
            }
          }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 16
            }
          }, /*#__PURE__*/React.createElement("span", {
            className: "k-label"
          }, "Matched for you"), /*#__PURE__*/React.createElement("a", {
            onClick: () => go('briefs'),
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)',
              cursor: 'pointer'
            }
          }, "See all")), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 12
            }
          }, /*#__PURE__*/React.createElement(GigCard, {
            title: "Research memo: data transfers",
            client: "Halden & Co",
            rate: "\xA3560",
            period: "fixed",
            tags: ['Privacy'],
            badge: "Visa-safe",
            posted: "2h ago",
            onClick: () => go('briefs'),
            style: {
              boxShadow: 'none',
              border: '1px solid var(--border-subtle)'
            }
          }), /*#__PURE__*/React.createElement(GigCard, {
            title: "Trademark filing support",
            client: "Studio Mor",
            rate: "\xA3300",
            period: "fixed",
            tags: ['IP'],
            posted: "Today",
            onClick: () => go('briefs'),
            style: {
              boxShadow: 'none',
              border: '1px solid var(--border-subtle)'
            }
          }))), /*#__PURE__*/React.createElement(Card, {
            tone: "accent",
            padding: "sm"
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              gap: 10
            }
          }, /*#__PURE__*/React.createElement(Icon, {
            name: "shield-check",
            size: 18,
            color: "var(--gold-700)"
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)',
              lineHeight: 1.55
            }
          }, "7.5 hours left this week. Bids over that limit are blocked automatically."))))));
        }
        Object.assign(window, {
          Dashboard
        });
      })();
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/app/Dashboard.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/app/Messages.jsx
  try {
    (() => {
      (function () {
        const {
          Card,
          Avatar,
          Input,
          Button,
          Icon,
          Badge,
          IconButton
        } = window.KontrakDesignSystem_5cbea0;
        const THREADS = [{
          id: 1,
          name: 'Dana Whitlock',
          org: 'Northlane Studio',
          last: 'Perfect — the risk note is exactly what we needed.',
          time: '10:24',
          unread: true
        }, {
          id: 2,
          name: 'Priya Nandra',
          org: 'Ferrow Legal',
          last: 'Can you start the NDA pack Monday?',
          time: 'Yesterday'
        }, {
          id: 3,
          name: 'Tom Halden',
          org: 'Halden & Co',
          last: 'Sending the source documents shortly.',
          time: '2 Sep'
        }];
        const MSGS = [{
          me: false,
          t: 'Morning Aisha — did the reseller mark-up land okay?',
          at: '09:58'
        }, {
          me: true,
          t: 'Yes, uploaded to the contract page along with the one-page risk note. Two clauses I flagged as materially off-market: 7.2 (uncapped indemnity) and 11.4 (auto-renew without notice).',
          at: '10:11'
        }, {
          me: false,
          t: 'Perfect — the risk note is exactly what we needed. Approving the escrow release now.',
          at: '10:24'
        }];
        function Messages() {
          const [active, setActive] = React.useState(1);
          const [draft, setDraft] = React.useState('');
          const [msgs, setMsgs] = React.useState(MSGS);
          const send = () => {
            if (!draft.trim()) return;
            setMsgs([...msgs, {
              me: true,
              t: draft,
              at: 'now'
            }]);
            setDraft('');
          };
          return /*#__PURE__*/React.createElement("div", {
            style: {
              padding: '24px 32px 32px',
              display: 'flex',
              gap: 20,
              height: 'calc(100vh - 122px)'
            }
          }, /*#__PURE__*/React.createElement(Card, {
            padding: "none",
            style: {
              width: 288,
              flexShrink: 0,
              overflow: 'hidden'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              padding: '16px 18px',
              borderBottom: '1px solid var(--border-hairline)'
            }
          }, /*#__PURE__*/React.createElement(Input, {
            size: "sm",
            placeholder: "Search messages\u2026",
            iconLeft: /*#__PURE__*/React.createElement(Icon, {
              name: "search",
              size: 14
            })
          })), THREADS.map(t => /*#__PURE__*/React.createElement("div", {
            key: t.id,
            onClick: () => setActive(t.id),
            style: {
              display: 'flex',
              gap: 11,
              padding: '14px 18px',
              cursor: 'pointer',
              borderBottom: '1px solid var(--border-hairline)',
              background: active === t.id ? 'var(--surface-hover)' : 'transparent',
              borderLeft: '2px solid ' + (active === t.id ? 'var(--gold-600)' : 'transparent')
            }
          }, /*#__PURE__*/React.createElement(Avatar, {
            name: t.name,
            size: "sm"
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              flex: 1,
              minWidth: 0
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              gap: 8
            }
          }, /*#__PURE__*/React.createElement("span", {
            style: {
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'var(--fs-base)',
              color: 'var(--text-strong)'
            }
          }, t.name), /*#__PURE__*/React.createElement("span", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-xs)',
              color: 'var(--text-faint)'
            }
          }, t.time)), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)',
              color: 'var(--text-muted)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              marginTop: 3
            }
          }, t.last))))), /*#__PURE__*/React.createElement(Card, {
            padding: "none",
            style: {
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              padding: '16px 22px',
              borderBottom: '1px solid var(--border-hairline)',
              display: 'flex',
              alignItems: 'center',
              gap: 12
            }
          }, /*#__PURE__*/React.createElement(Avatar, {
            name: "Dana Whitlock",
            verified: true
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              flex: 1
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'var(--fs-md)',
              color: 'var(--text-strong)'
            }
          }, "Dana Whitlock"), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)',
              color: 'var(--text-muted)'
            }
          }, "Northlane Studio \xB7 GC")), /*#__PURE__*/React.createElement(Badge, {
            tone: "navy"
          }, "KTK-2026-0413"), /*#__PURE__*/React.createElement(IconButton, {
            label: "Contract details",
            variant: "outline"
          }, /*#__PURE__*/React.createElement(Icon, {
            name: "file-signature"
          }))), /*#__PURE__*/React.createElement("div", {
            style: {
              flex: 1,
              overflowY: 'auto',
              padding: '22px',
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              background: 'var(--warm-white)'
            }
          }, msgs.map((m, i) => /*#__PURE__*/React.createElement("div", {
            key: i,
            style: {
              alignSelf: m.me ? 'flex-end' : 'flex-start',
              maxWidth: '62%'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              padding: '12px 16px',
              borderRadius: 'var(--radius-md)',
              background: m.me ? 'var(--navy-900)' : 'var(--surface-card)',
              color: m.me ? '#fff' : 'var(--text-body)',
              border: m.me ? 'none' : '1px solid var(--border-subtle)',
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'var(--fs-base)',
              lineHeight: 1.6
            }
          }, m.t), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-xs)',
              color: 'var(--text-faint)',
              marginTop: 5,
              textAlign: m.me ? 'right' : 'left'
            }
          }, m.at)))), /*#__PURE__*/React.createElement("div", {
            style: {
              padding: 16,
              borderTop: '1px solid var(--border-hairline)',
              display: 'flex',
              gap: 10
            }
          }, /*#__PURE__*/React.createElement(Input, {
            value: draft,
            onChange: e => setDraft(e.target.value),
            onKeyDown: e => e.key === 'Enter' && send(),
            placeholder: "Write a message\u2026"
          }), /*#__PURE__*/React.createElement(Button, {
            onClick: send,
            iconRight: /*#__PURE__*/React.createElement(Icon, {
              name: "send",
              size: 15
            })
          }, "Send"))));
        }
        Object.assign(window, {
          Messages
        });
      })();
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/app/Messages.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/app/Shell.jsx
  try {
    (() => {
      (function () {
        const {
          Logo,
          Icon,
          Avatar,
          IconButton,
          Badge,
          Tooltip
        } = window.KontrakDesignSystem_5cbea0;
        const NAV = [['dashboard', 'layout-dashboard', 'Dashboard'], ['briefs', 'search', 'Find briefs'], ['contracts', 'file-signature', 'Contracts'], ['messages', 'message-square', 'Messages'], ['payments', 'wallet', 'Payments']];
        function Sidebar({
          route,
          go
        }) {
          return /*#__PURE__*/React.createElement("aside", {
            style: {
              width: 236,
              flexShrink: 0,
              background: 'var(--navy-900)',
              display: 'flex',
              flexDirection: 'column',
              padding: '22px 14px',
              gap: 26
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              padding: '0 8px'
            }
          }, /*#__PURE__*/React.createElement(Logo, {
            tone: "onNavy",
            size: 34,
            tagline: false
          })), /*#__PURE__*/React.createElement("nav", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }
          }, NAV.map(([id, ic, label]) => {
            const on = route === id;
            return /*#__PURE__*/React.createElement("a", {
              key: id,
              onClick: () => go(id),
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: 11,
                padding: '10px 12px',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--fs-base)',
                background: on ? 'rgba(255,255,255,0.09)' : 'transparent',
                color: on ? '#fff' : 'rgba(255,255,255,0.6)',
                transition: 'var(--transition-ui)'
              }
            }, /*#__PURE__*/React.createElement(Icon, {
              name: ic,
              size: 17,
              color: on ? 'var(--gold-400)' : 'rgba(255,255,255,0.55)'
            }), label, id === 'messages' && /*#__PURE__*/React.createElement("span", {
              style: {
                marginLeft: 'auto',
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--gold-500)'
              }
            }));
          })), /*#__PURE__*/React.createElement("div", {
            style: {
              marginTop: 'auto',
              padding: 16,
              borderRadius: 'var(--radius-md)',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--border-inverse)'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-micro)',
              letterSpacing: 'var(--ls-label-xs)',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: 10
            }
          }, "Visa hours \xB7 this week"), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)',
              color: '#fff',
              marginBottom: 8
            }
          }, /*#__PURE__*/React.createElement("span", null, "12.5 h"), /*#__PURE__*/React.createElement("span", {
            style: {
              color: 'rgba(255,255,255,0.45)'
            }
          }, "of 20 h")), /*#__PURE__*/React.createElement("div", {
            style: {
              height: 5,
              borderRadius: 3,
              background: 'rgba(255,255,255,0.12)',
              overflow: 'hidden'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              width: '62%',
              height: '100%',
              background: 'var(--gold-500)'
            }
          }))));
        }
        function TopBar({
          title,
          eyebrow,
          actions
        }) {
          return /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: 24,
              padding: '28px 32px 22px',
              borderBottom: '1px solid var(--border-subtle)',
              background: 'var(--warm-white)'
            }
          }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
            className: "k-label",
            style: {
              marginBottom: 10
            }
          }, eyebrow), /*#__PURE__*/React.createElement("h1", {
            style: {
              font: '300 32px/1.15 var(--font-serif)',
              color: 'var(--text-strong)'
            }
          }, title)), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: 12
            }
          }, actions, /*#__PURE__*/React.createElement(Tooltip, {
            label: "Notifications"
          }, /*#__PURE__*/React.createElement(IconButton, {
            label: "Notifications",
            variant: "outline"
          }, /*#__PURE__*/React.createElement(Icon, {
            name: "bell"
          }))), /*#__PURE__*/React.createElement(Avatar, {
            name: "Aisha Rahman",
            verified: true
          })));
        }
        Object.assign(window, {
          Sidebar,
          TopBar
        });
      })();
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/app/Shell.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/BrowseWork.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      (function () {
        const {
          Button,
          Card,
          Input,
          Select,
          Tag,
          Tabs,
          Switch,
          Icon,
          GigCard,
          Badge
        } = window.KontrakDesignSystem_5cbea0;
        const BRIEFS = [{
          title: 'Review a SaaS reseller agreement',
          client: 'Aurelis Studio',
          location: 'Remote · Berlin',
          rate: '€480',
          period: 'fixed',
          tags: ['SaaS & IT', 'Contract review'],
          badge: 'Day-cap safe',
          rating: 4.9,
          reviews: 22
        }, {
          title: 'DPA and SCC pack for a cloud migration',
          client: 'Ferrow Rechtsanwälte',
          location: 'München',
          rate: '€34',
          period: 'hour',
          tags: ['Data protection', 'Drafting'],
          rating: 4.7,
          reviews: 14
        }, {
          title: 'AI Act risk-classification memo for a scoring model',
          client: 'Halden & Co',
          location: 'Remote · EU',
          rate: '€620',
          period: 'fixed',
          tags: ['AI & regulation', 'Research'],
          badge: 'Day-cap safe',
          rating: 5.0,
          reviews: 9
        }, {
          title: 'Open-source licence audit for a Series A data room',
          client: 'Nordwind Ventures',
          location: 'Hamburg',
          rate: '€26',
          period: 'hour',
          tags: ['IP & licensing', 'Due diligence'],
          rating: 4.4,
          reviews: 31
        }, {
          title: 'Trademark filing support — 6 Nizza classes, fintech brand',
          client: 'Studio Mor',
          location: 'Remote · Köln',
          rate: '€340',
          period: 'fixed',
          tags: ['IP & licensing', 'Filings'],
          rating: 4.8,
          reviews: 6
        }, {
          title: 'Werkstudent: SaaS contract templates for a Series A',
          client: 'Kelvin Analytics GmbH',
          location: 'Leipzig',
          rate: '€29',
          period: 'hour',
          tags: ['Corporate', 'Drafting'],
          badge: 'Day-cap safe',
          rating: 4.6,
          reviews: 12
        }, {
          title: 'BaFin outsourcing clauses for a payments integration',
          client: 'Selfa Pay GmbH',
          location: 'Frankfurt',
          rate: '€520',
          period: 'fixed',
          tags: ['Fintech', 'Regulatory'],
          rating: 4.9,
          reviews: 17
        }, {
          title: 'Market-definition note for a merger filing',
          client: 'Ostwald Economics',
          location: 'Remote · Berlin',
          rate: '€31',
          period: 'hour',
          tags: ['Competition', 'Economics'],
          badge: 'Day-cap safe',
          rating: 4.8,
          reviews: 11
        }];
        function BrowseWork({
          go
        }) {
          const [tab, setTab] = React.useState('open');
          const [areas, setAreas] = React.useState(['SaaS & IT']);
          const [visaOnly, setVisaOnly] = React.useState(false);
          const toggle = a => setAreas(areas.includes(a) ? areas.filter(x => x !== a) : [...areas, a]);
          const list = visaOnly ? BRIEFS.filter(b => b.badge) : BRIEFS;
          return /*#__PURE__*/React.createElement("div", {
            style: {
              maxWidth: 'var(--maxw-content)',
              margin: '0 auto',
              padding: '48px 40px 88px'
            }
          }, /*#__PURE__*/React.createElement("div", {
            className: "k-eyebrow",
            style: {
              marginBottom: 12
            }
          }, "Open briefs"), /*#__PURE__*/React.createElement("h1", {
            style: {
              font: '300 44px/1.15 var(--font-serif)',
              color: 'var(--text-strong)',
              marginBottom: 32
            }
          }, "Find contract work"), /*#__PURE__*/React.createElement(Card, {
            padding: "sm",
            style: {
              marginBottom: 28,
              display: 'flex',
              flexDirection: 'column',
              gap: 16
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr auto',
              gap: 12
            }
          }, /*#__PURE__*/React.createElement(Input, {
            placeholder: "Search briefs, clients, practice areas\u2026",
            iconLeft: /*#__PURE__*/React.createElement(Icon, {
              name: "search",
              size: 15
            })
          }), /*#__PURE__*/React.createElement(Select, {
            placeholder: "All jurisdictions",
            options: ['Germany', 'Austria', 'Switzerland', 'EU-wide']
          }), /*#__PURE__*/React.createElement(Select, {
            placeholder: "Any fee type",
            options: ['Fixed fee', 'Hourly', 'Retainer']
          }), /*#__PURE__*/React.createElement(Button, null, "Search")), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              flexWrap: 'wrap'
            }
          }, ['SaaS & IT', 'Data protection', 'AI & regulation', 'IP & licensing', 'Fintech', 'Corporate', 'Competition', 'Economics'].map(a => /*#__PURE__*/React.createElement(Tag, {
            key: a,
            selected: areas.includes(a),
            onClick: () => toggle(a)
          }, a)), /*#__PURE__*/React.createElement("span", {
            style: {
              flex: 1
            }
          }), /*#__PURE__*/React.createElement(Switch, {
            checked: visaOnly,
            onChange: setVisaOnly,
            label: "Fits my remaining days"
          }))), /*#__PURE__*/React.createElement(Tabs, {
            value: tab,
            onChange: setTab,
            style: {
              marginBottom: 24
            },
            items: [{
              value: 'open',
              label: 'All open',
              count: list.length
            }, {
              value: 'new',
              label: 'Posted today',
              count: 2
            }, {
              value: 'saved',
              label: 'Saved',
              count: 4
            }]
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 16
            }
          }, list.map(b => /*#__PURE__*/React.createElement(GigCard, _extends({
            key: b.title
          }, b, {
            onClick: () => go('gig')
          })))), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              justifyContent: 'center',
              marginTop: 36
            }
          }, /*#__PURE__*/React.createElement(Button, {
            variant: "secondary"
          }, "Load 26 more briefs")));
        }
        Object.assign(window, {
          BrowseWork
        });
      })();
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/BrowseWork.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/Chrome.jsx
  try {
    (() => {
      (function () {
        const {
          Logo,
          Button,
          Icon
        } = window.KontrakDesignSystem_5cbea0;
        function SiteHeader({
          route,
          go
        }) {
          const links = [['work', 'Find work'], ['clients', 'For clients'], ['visa', 'Visa & rules'], ['pricing', 'Pricing']];
          return /*#__PURE__*/React.createElement("header", {
            style: {
              position: 'sticky',
              top: 0,
              zIndex: 30,
              background: 'rgba(247,245,240,0.88)',
              backdropFilter: 'blur(10px)',
              borderBottom: '1px solid var(--border-subtle)'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              maxWidth: 'var(--maxw-content)',
              margin: '0 auto',
              padding: '0 40px',
              height: 76,
              display: 'flex',
              alignItems: 'center',
              gap: 40
            }
          }, /*#__PURE__*/React.createElement("span", {
            style: {
              cursor: 'pointer'
            },
            onClick: () => go('home')
          }, /*#__PURE__*/React.createElement(Logo, {
            size: 38,
            tagline: false
          })), /*#__PURE__*/React.createElement("nav", {
            style: {
              display: 'flex',
              gap: 28,
              flex: 1
            }
          }, links.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
            key: id,
            onClick: () => go(id),
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-base)',
              cursor: 'pointer',
              color: route === id ? 'var(--text-strong)' : 'var(--text-muted)'
            }
          }, label))), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              gap: 10,
              alignItems: 'center'
            }
          }, /*#__PURE__*/React.createElement(Button, {
            variant: "ghost",
            size: "sm",
            onClick: () => go('signup')
          }, "Log in"), /*#__PURE__*/React.createElement(Button, {
            variant: "primary",
            size: "sm",
            onClick: () => go('signup')
          }, "Join as a student"))));
        }
        function SiteFooter({
          go = () => {}
        }) {
          const cols = [['For students', [['Find work', 'work'], ['Visa & hour rules', 'visa'], ['Get verified', 'signup'], ['Rates guide', 'visa']]], ['For clients', [['Post a brief', 'clients'], ['How vetting works', 'clients'], ['Pricing', 'pricing'], ['Escrow & payments', 'pricing']]], ['Company', [['About', 'home'], ['Careers', 'home'], ['Press', 'home'], ['Contact', 'home']]]];
          return /*#__PURE__*/React.createElement("footer", {
            style: {
              background: 'var(--navy-900)',
              color: 'var(--text-on-navy)',
              padding: '64px 40px 40px'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              maxWidth: 'var(--maxw-content)',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
              gap: 40
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 16
            }
          }, /*#__PURE__*/React.createElement(Logo, {
            tone: "onNavy",
            size: 40
          }), /*#__PURE__*/React.createElement("p", {
            style: {
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'var(--fs-base)',
              lineHeight: 1.65,
              color: 'var(--text-on-navy-muted)',
              maxWidth: '30ch'
            }
          }, "Legal freelancing built around international students in Germany \u2014 scoped, signed and paid in one place.")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
            key: h,
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 12
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-micro)',
              letterSpacing: 'var(--ls-label-sm)',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.38)'
            }
          }, h), items.map(([label, r]) => /*#__PURE__*/React.createElement("a", {
            key: label,
            onClick: () => go(r),
            style: {
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'var(--fs-base)',
              color: 'var(--text-on-navy-muted)',
              cursor: 'pointer'
            }
          }, label))))), /*#__PURE__*/React.createElement("div", {
            style: {
              maxWidth: 'var(--maxw-content)',
              margin: '48px auto 0',
              paddingTop: 24,
              borderTop: '1px solid var(--border-inverse)',
              display: 'flex',
              justifyContent: 'space-between'
            }
          }, /*#__PURE__*/React.createElement("span", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)',
              color: 'rgba(255,255,255,0.38)'
            }
          }, "\xA9 2026 Kontrak Ltd."), /*#__PURE__*/React.createElement("span", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-micro)',
              letterSpacing: 'var(--ls-label-sm)',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.28)'
            }
          }, "Work Legal \xB7 Work Smart")));
        }
        Object.assign(window, {
          SiteHeader,
          SiteFooter
        });
      })();
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/Chrome.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/ForClients.jsx
  try {
    (() => {
      (function () {
        const {
          Button,
          Card,
          Badge,
          Icon,
          StatTile,
          Stepper,
          Avatar,
          Rating,
          Tag,
          Field,
          Input,
          Select,
          Textarea
        } = window.KontrakDesignSystem_5cbea0;
        const TALENT = [{
          name: 'Aisha Rahman',
          uni: 'Humboldt-Universität zu Berlin',
          area: ['Commercial', 'Privacy'],
          rate: '€34 / h',
          rating: 4.9,
          reviews: 22
        }, {
          name: 'Jonas Weber',
          uni: 'LMU München',
          area: ['Corporate', 'M&A support'],
          rate: '€38 / h',
          rating: 4.8,
          reviews: 16
        }, {
          name: 'Priya Nandra',
          uni: 'Universität Hamburg',
          area: ['Employment'],
          rate: '€29 / h',
          rating: 5.0,
          reviews: 9
        }];
        function ForClients({
          go
        }) {
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
            style: {
              background: 'var(--navy-900)',
              color: '#fff',
              padding: '80px 40px 72px'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              maxWidth: 'var(--maxw-content)',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: '1.1fr 0.9fr',
              gap: 56,
              alignItems: 'center'
            }
          }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-tiny)',
              letterSpacing: 'var(--ls-eyebrow)',
              textTransform: 'uppercase',
              color: 'var(--gold-400)',
              marginBottom: 18
            }
          }, "For clients"), /*#__PURE__*/React.createElement("h1", {
            style: {
              font: '300 52px/1.1 var(--font-serif)',
              color: '#fff',
              marginBottom: 20
            }
          }, "Overflow legal work,", /*#__PURE__*/React.createElement("br", null), "compliantly staffed"), /*#__PURE__*/React.createElement("p", {
            style: {
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'var(--fs-lg)',
              lineHeight: 1.6,
              color: 'var(--text-on-navy-muted)',
              maxWidth: '46ch',
              marginBottom: 30
            }
          }, "Post a brief and receive scoped bids from verified law students at German universities. We check enrolment, permit wording and hour caps before anyone can bid on your work."), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              gap: 12
            }
          }, /*#__PURE__*/React.createElement(Button, {
            variant: "accent",
            size: "lg",
            onClick: () => go('signup'),
            iconRight: /*#__PURE__*/React.createElement(Icon, {
              name: "arrow-right",
              size: 17
            })
          }, "Post a brief"), /*#__PURE__*/React.createElement(Button, {
            variant: "onNavy",
            size: "lg",
            onClick: () => go('pricing')
          }, "See pricing"))), /*#__PURE__*/React.createElement(Card, {
            padding: "md"
          }, /*#__PURE__*/React.createElement("div", {
            className: "k-label",
            style: {
              marginBottom: 16
            }
          }, "Post a brief \xB7 example"), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 14
            }
          }, /*#__PURE__*/React.createElement(Field, {
            label: "Title",
            htmlFor: "t"
          }, /*#__PURE__*/React.createElement(Input, {
            id: "t",
            defaultValue: "Review a SaaS reseller agreement"
          })), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 12
            }
          }, /*#__PURE__*/React.createElement(Field, {
            label: "Fee",
            htmlFor: "f"
          }, /*#__PURE__*/React.createElement(Input, {
            id: "f",
            defaultValue: "\u20AC480"
          })), /*#__PURE__*/React.createElement(Field, {
            label: "Scoped hours",
            htmlFor: "h",
            hint: "\u20AC34 / h effective"
          }, /*#__PURE__*/React.createElement(Input, {
            id: "h",
            defaultValue: "14"
          }))), /*#__PURE__*/React.createElement(Field, {
            label: "Jurisdiction",
            htmlFor: "j"
          }, /*#__PURE__*/React.createElement(Select, {
            id: "j",
            options: ['Germany', 'Austria', 'Switzerland', 'EU-wide']
          })), /*#__PURE__*/React.createElement(Button, {
            variant: "primary",
            block: true,
            onClick: () => go('signup')
          }, "Publish to 2,400 students"))))), /*#__PURE__*/React.createElement("section", {
            style: {
              padding: '48px 40px',
              background: 'var(--parchment)'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              maxWidth: 'var(--maxw-content)',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: 16
            }
          }, /*#__PURE__*/React.createElement(StatTile, {
            label: "Median first bid",
            value: "6 h",
            delta: "after publishing"
          }), /*#__PURE__*/React.createElement(StatTile, {
            label: "Avg. brief value",
            value: "\u20AC410"
          }), /*#__PURE__*/React.createElement(StatTile, {
            label: "Verified students",
            value: "2,400+"
          }), /*#__PURE__*/React.createElement(StatTile, {
            label: "Compliance escalations",
            value: "0",
            delta: "Hour caps enforced"
          }))), /*#__PURE__*/React.createElement("section", {
            style: {
              padding: '80px 40px',
              maxWidth: 'var(--maxw-content)',
              margin: '0 auto'
            }
          }, /*#__PURE__*/React.createElement("div", {
            className: "k-eyebrow",
            style: {
              marginBottom: 14
            }
          }, "How hiring works"), /*#__PURE__*/React.createElement("h2", {
            style: {
              font: '300 38px/1.15 var(--font-serif)',
              color: 'var(--text-strong)',
              marginBottom: 40,
              maxWidth: '24ch'
            }
          }, "Four steps, one invoice"), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: 20
            }
          }, [['file-text', 'Post the brief', 'Scope, fee, deadline, jurisdiction. Fixed fee or hourly.'], ['users', 'Review bids', 'Each bid carries the student\'s university, practice areas, rate and remaining permitted hours.'], ['file-signature', 'Sign', 'We generate the engagement letter under German law. Both sides sign in-app.'], ['wallet', 'Fund escrow', 'Fees sit in escrow and release on your sign-off. One monthly invoice with VAT.']].map(([ic, t, d], i) => /*#__PURE__*/React.createElement(Card, {
            key: t,
            tone: "outline",
            padding: "sm",
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 14
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }
          }, /*#__PURE__*/React.createElement(Icon, {
            name: ic,
            size: 22,
            color: "var(--navy-700)"
          }), /*#__PURE__*/React.createElement("span", {
            style: {
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'var(--fs-2xl)',
              color: 'var(--gold-200)'
            }
          }, "0", i + 1)), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'var(--fs-md)',
              color: 'var(--text-strong)'
            }
          }, t), /*#__PURE__*/React.createElement("p", {
            style: {
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'var(--fs-base)',
              lineHeight: 1.6,
              color: 'var(--text-muted)'
            }
          }, d))))), /*#__PURE__*/React.createElement("section", {
            style: {
              padding: '0 40px 80px',
              maxWidth: 'var(--maxw-content)',
              margin: '0 auto'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 20,
              alignItems: 'start'
            }
          }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
            className: "k-label",
            style: {
              marginBottom: 16
            }
          }, "Verification we run"), [['badge-check', 'Enrolment confirmed with the university registrar'], ['shield-check', 'Residence permit wording read and recorded'], ['clock', 'Remaining day-account balance checked before every bid'], ['scale', 'Practice-area references from prior engagements']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
            key: t,
            style: {
              display: 'flex',
              gap: 12,
              alignItems: 'flex-start',
              padding: '13px 0',
              borderTop: '1px solid var(--border-hairline)'
            }
          }, /*#__PURE__*/React.createElement(Icon, {
            name: ic,
            size: 18,
            color: "var(--navy-500)"
          }), /*#__PURE__*/React.createElement("span", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-base)',
              lineHeight: 1.55,
              color: 'var(--text-body)'
            }
          }, t)))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 16
            }
          }, /*#__PURE__*/React.createElement("span", {
            className: "k-label"
          }, "Students bidding this week"), /*#__PURE__*/React.createElement(Badge, {
            tone: "neutral"
          }, "Example data")), TALENT.map(t => /*#__PURE__*/React.createElement("div", {
            key: t.name,
            style: {
              display: 'flex',
              gap: 12,
              alignItems: 'center',
              padding: '14px 0',
              borderTop: '1px solid var(--border-hairline)'
            }
          }, /*#__PURE__*/React.createElement(Avatar, {
            name: t.name,
            verified: true
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              flex: 1,
              minWidth: 0
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'var(--fs-base)',
              color: 'var(--text-strong)'
            }
          }, t.name), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)',
              color: 'var(--text-muted)'
            }
          }, t.uni), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              gap: 5,
              marginTop: 7
            }
          }, t.area.map(a => /*#__PURE__*/React.createElement(Tag, {
            key: a
          }, a)))), /*#__PURE__*/React.createElement("div", {
            style: {
              textAlign: 'right'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'var(--fs-md)',
              color: 'var(--text-strong)'
            }
          }, t.rate), /*#__PURE__*/React.createElement("div", {
            style: {
              marginTop: 6
            }
          }, /*#__PURE__*/React.createElement(Rating, {
            value: t.rating,
            count: t.reviews,
            size: 11
          })))))))), /*#__PURE__*/React.createElement("section", {
            style: {
              padding: '0 40px 96px',
              maxWidth: 'var(--maxw-content)',
              margin: '0 auto'
            }
          }, /*#__PURE__*/React.createElement(Card, {
            tone: "navy",
            padding: "lg",
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 40
            }
          }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
            style: {
              font: '300 30px/1.25 var(--font-serif)',
              color: '#fff',
              marginBottom: 12
            }
          }, "Your first brief is free to post"), /*#__PURE__*/React.createElement("p", {
            style: {
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'var(--fs-md)',
              color: 'var(--text-on-navy-muted)',
              maxWidth: '52ch'
            }
          }, "No listing fee, no subscription. We take a platform fee on completed engagements only.")), /*#__PURE__*/React.createElement(Button, {
            variant: "accent",
            size: "lg",
            onClick: () => go('signup')
          }, "Post a brief"))));
        }
        Object.assign(window, {
          ForClients
        });
      })();
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/ForClients.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/GigDetail.jsx
  try {
    (() => {
      (function () {
        const {
          Button,
          Card,
          Badge,
          Tag,
          Avatar,
          Rating,
          Icon,
          Field,
          Input,
          Textarea,
          Stepper,
          Dialog,
          Toast
        } = window.KontrakDesignSystem_5cbea0;
        function GigDetail({
          go
        }) {
          const [open, setOpen] = React.useState(false);
          const [sent, setSent] = React.useState(false);
          return /*#__PURE__*/React.createElement("div", {
            style: {
              maxWidth: 'var(--maxw-content)',
              margin: '0 auto',
              padding: '40px 40px 88px'
            }
          }, /*#__PURE__*/React.createElement("a", {
            onClick: () => go('work'),
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'inline-flex',
              gap: 6,
              alignItems: 'center',
              marginBottom: 24
            }
          }, /*#__PURE__*/React.createElement(Icon, {
            name: "arrow-left",
            size: 14
          }), " All briefs"), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'grid',
              gridTemplateColumns: '1.6fr 0.9fr',
              gap: 32,
              alignItems: 'start'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 20
            }
          }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              gap: 20,
              marginBottom: 20
            }
          }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
            className: "k-label",
            style: {
              marginBottom: 12
            }
          }, "Commercial \xB7 Contract review"), /*#__PURE__*/React.createElement("h1", {
            style: {
              font: '300 34px/1.2 var(--font-serif)',
              color: 'var(--text-strong)',
              marginBottom: 12
            }
          }, "Review a SaaS reseller agreement"), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              gap: 8
            }
          }, /*#__PURE__*/React.createElement(Badge, {
            tone: "gold"
          }, "Day-cap safe"), /*#__PURE__*/React.createElement(Badge, {
            tone: "navy",
            dot: true
          }, "Escrow ready"))), /*#__PURE__*/React.createElement("div", {
            style: {
              textAlign: 'right',
              flexShrink: 0
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'var(--fs-4xl)',
              color: 'var(--text-strong)',
              lineHeight: 1
            }
          }, "\u20AC480"), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)',
              color: 'var(--text-muted)',
              marginTop: 6
            }
          }, "fixed fee \xB7 14 h scope \xB7 \u20AC34.29 / h"))), /*#__PURE__*/React.createElement("div", {
            style: {
              height: 1,
              background: 'var(--border-hairline)',
              margin: '0 0 20px'
            }
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'var(--fs-md)',
              lineHeight: 1.7,
              color: 'var(--text-body)',
              display: 'flex',
              flexDirection: 'column',
              gap: 14
            }
          }, /*#__PURE__*/React.createElement("p", null, "We're signing our first reseller in the Nordics and need a second pair of eyes on the agreement before it goes back to their counsel."), /*#__PURE__*/React.createElement("p", null, "Deliverable is a marked-up copy plus a one-page risk note. Our Syndikusanw\xE4ltin will walk you through the commercial context on a 30-minute call.")), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: 16,
              marginTop: 28
            }
          }, [['calendar', 'Deadline', '12 Sep 2026'], ['globe', 'Jurisdiction', 'Germany · BGB / HGB'], ['clock', 'Scoped hours', '14 h · 2 full days']].map(([ic, l, v]) => /*#__PURE__*/React.createElement("div", {
            key: l,
            style: {
              display: 'flex',
              gap: 10,
              alignItems: 'flex-start'
            }
          }, /*#__PURE__*/React.createElement(Icon, {
            name: ic,
            size: 17,
            color: "var(--navy-500)"
          }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
            className: "k-label",
            style: {
              marginBottom: 4
            }
          }, l), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-base)',
              color: 'var(--text-strong)'
            }
          }, v)))))), /*#__PURE__*/React.createElement(Card, {
            tone: "outline"
          }, /*#__PURE__*/React.createElement("div", {
            className: "k-label",
            style: {
              marginBottom: 16
            }
          }, "What happens after you bid"), /*#__PURE__*/React.createElement(Stepper, {
            steps: ['Bid sent', 'Client review', 'Contract signed', 'Escrow funded'],
            current: 0
          }))), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              position: 'sticky',
              top: 100
            }
          }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              gap: 12,
              alignItems: 'center',
              marginBottom: 16
            }
          }, /*#__PURE__*/React.createElement(Avatar, {
            name: "Aurelis Studio",
            size: "lg",
            verified: true
          }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'var(--fs-md)',
              color: 'var(--text-strong)'
            }
          }, "Aurelis Studio"), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)',
              color: 'var(--text-muted)'
            }
          }, "Remote \xB7 Berlin \xB7 14 briefs posted"))), /*#__PURE__*/React.createElement(Rating, {
            value: 4.9,
            count: 22
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              height: 1,
              background: 'var(--border-hairline)',
              margin: '18px 0'
            }
          }), /*#__PURE__*/React.createElement(Button, {
            variant: "accent",
            block: true,
            size: "lg",
            onClick: () => setOpen(true)
          }, "Send a bid"), /*#__PURE__*/React.createElement(Button, {
            variant: "ghost",
            block: true,
            style: {
              marginTop: 8
            },
            iconLeft: /*#__PURE__*/React.createElement(Icon, {
              name: "bookmark",
              size: 15
            })
          }, "Save brief")), /*#__PURE__*/React.createElement(Card, {
            tone: "accent",
            padding: "sm"
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              gap: 10
            }
          }, /*#__PURE__*/React.createElement(Icon, {
            name: "shield-check",
            size: 18,
            color: "var(--gold-700)"
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)',
              lineHeight: 1.55,
              color: 'var(--text-body)'
            }
          }, "Fits your remaining ", /*#__PURE__*/React.createElement("strong", null, "7.5 hours"), " this week and ", /*#__PURE__*/React.createElement("strong", null, "54 full days"), " this year."))))), /*#__PURE__*/React.createElement(Dialog, {
            open: open,
            eyebrow: "Your bid",
            title: "Bid on this brief",
            width: 520,
            onClose: () => setOpen(false),
            footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
              variant: "ghost",
              onClick: () => setOpen(false)
            }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
              variant: "accent",
              onClick: () => {
                setOpen(false);
                setSent(true);
              }
            }, "Send bid"))
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 16
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 12
            }
          }, /*#__PURE__*/React.createElement(Field, {
            label: "Your fee",
            htmlFor: "fee"
          }, /*#__PURE__*/React.createElement(Input, {
            id: "fee",
            defaultValue: "\u20AC480"
          })), /*#__PURE__*/React.createElement(Field, {
            label: "Hours you'll bill",
            htmlFor: "hrs",
            hint: "7.5 h left this week \xB7 floor \u20AC13.90/h"
          }, /*#__PURE__*/React.createElement(Input, {
            id: "hrs",
            defaultValue: "14"
          }))), /*#__PURE__*/React.createElement(Field, {
            label: "Scope note",
            htmlFor: "sc"
          }, /*#__PURE__*/React.createElement(Textarea, {
            id: "sc",
            rows: 3,
            placeholder: "How you'd approach the mark-up\u2026"
          })))), sent && /*#__PURE__*/React.createElement("div", {
            style: {
              position: 'fixed',
              right: 24,
              bottom: 24,
              zIndex: 80
            }
          }, /*#__PURE__*/React.createElement(Toast, {
            tone: "success",
            title: "Bid sent",
            icon: /*#__PURE__*/React.createElement(Icon, {
              name: "check-circle"
            }),
            onDismiss: () => setSent(false)
          }, "Aurelis Studio usually replies within a day.")));
        }
        Object.assign(window, {
          GigDetail
        });
      })();
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/GigDetail.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/Home.jsx
  try {
    (() => {
      (function () {
        const {
          Button,
          Card,
          Badge,
          Icon,
          StatTile,
          GigCard,
          Tag
        } = window.KontrakDesignSystem_5cbea0;

        /* Reveals a block once, on first scroll into view. Fade + 14px rise, nothing else. */
        function Reveal({
          children,
          delay = 0,
          style
        }) {
          const ref = React.useRef(null);
          const [seen, setSeen] = React.useState(false);
          React.useEffect(() => {
            const el = ref.current;
            if (!el || seen) return;
            const io = new IntersectionObserver(([e]) => {
              if (e.isIntersecting) {
                setSeen(true);
                io.disconnect();
              }
            }, {
              rootMargin: '-8% 0px -12%'
            });
            io.observe(el);
            return () => io.disconnect();
          }, [seen]);
          return /*#__PURE__*/React.createElement("div", {
            ref: ref,
            className: 'k-reveal' + (seen ? ' in' : ''),
            style: {
              animationDelay: delay + 'ms',
              ...style
            }
          }, children);
        }

        /* Counts a figure up once it is in view. Prefix/suffix keep the brand's formatting. */
        function Figure({
          to,
          prefix = '',
          suffix = '',
          decimals = 0,
          duration = 1100
        }) {
          const ref = React.useRef(null);
          const [v, setV] = React.useState(0);
          React.useEffect(() => {
            const el = ref.current;
            if (!el) return;
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
              setV(to);
              return;
            }
            const io = new IntersectionObserver(([e]) => {
              if (!e.isIntersecting) return;
              io.disconnect();
              const t0 = performance.now();
              const tick = t => {
                const p = Math.min(1, (t - t0) / duration);
                const eased = 1 - Math.pow(1 - p, 3);
                setV(to * eased);
                if (p < 1) requestAnimationFrame(tick);
              };
              requestAnimationFrame(tick);
            }, {
              rootMargin: '-10% 0px'
            });
            io.observe(el);
            return () => io.disconnect();
          }, [to, duration]);
          const shown = decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString('en-GB');
          return /*#__PURE__*/React.createElement("span", {
            ref: ref
          }, prefix, shown, suffix);
        }
        function Home({
          go
        }) {
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
            style: {
              background: 'var(--navy-900)',
              color: '#fff',
              padding: '96px 40px 88px'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              maxWidth: 'var(--maxw-content)',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: '1.15fr 0.85fr',
              gap: 64,
              alignItems: 'center'
            }
          }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
            className: "k-enter",
            style: {
              animationDelay: '40ms',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-tiny)',
              letterSpacing: 'var(--ls-eyebrow)',
              textTransform: 'uppercase',
              color: 'var(--gold-400)',
              marginBottom: 16
            }
          }, "Legal freelancing for international students \xB7 Germany"), /*#__PURE__*/React.createElement("div", {
            className: "k-rule",
            style: {
              animationDelay: '220ms',
              width: 64,
              height: 1.5,
              background: 'var(--gold-500)',
              marginBottom: 24
            }
          }), /*#__PURE__*/React.createElement("h1", {
            style: {
              font: '300 64px/1.08 var(--font-serif)',
              color: '#fff',
              letterSpacing: '-0.01em',
              marginBottom: 22
            }
          }, /*#__PURE__*/React.createElement("span", {
            className: "k-enter",
            style: {
              animationDelay: '120ms',
              display: 'block'
            }
          }, "Paid legal work"), /*#__PURE__*/React.createElement("span", {
            className: "k-enter",
            style: {
              animationDelay: '240ms',
              display: 'block'
            }
          }, "that fits your visa")), /*#__PURE__*/React.createElement("p", {
            className: "k-enter",
            style: {
              animationDelay: '340ms',
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'var(--fs-lg)',
              lineHeight: 1.6,
              color: 'var(--text-on-navy-muted)',
              maxWidth: '46ch',
              marginBottom: 32
            }
          }, "Kontrak matches law students at German universities with real contract work from vetted clients. Every brief is checked against your \xA716b day account, every fee sits in escrow, every engagement is a signed contract."), /*#__PURE__*/React.createElement("div", {
            className: "k-enter",
            style: {
              animationDelay: '440ms',
              display: 'flex',
              gap: 12,
              marginBottom: 36
            }
          }, /*#__PURE__*/React.createElement(Button, {
            variant: "accent",
            size: "lg",
            onClick: () => go('signup'),
            iconRight: /*#__PURE__*/React.createElement(Icon, {
              name: "arrow-right",
              size: 17
            })
          }, "Join as a student"), /*#__PURE__*/React.createElement(Button, {
            variant: "onNavy",
            size: "lg",
            onClick: () => go('work')
          }, "Browse open briefs")), /*#__PURE__*/React.createElement("div", {
            className: "k-enter",
            style: {
              animationDelay: '560ms',
              display: 'flex',
              gap: 22,
              alignItems: 'center'
            }
          }, [['shield-check', '140-day account tracked'], ['file-signature', 'Contract on every gig'], ['wallet', 'Escrow-held fees in EUR']].map(([ic, t]) => /*#__PURE__*/React.createElement("span", {
            key: t,
            style: {
              display: 'flex',
              gap: 8,
              alignItems: 'center',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)',
              color: 'rgba(255,255,255,0.6)'
            }
          }, /*#__PURE__*/React.createElement(Icon, {
            name: ic,
            size: 16,
            color: "var(--gold-400)"
          }), t)))), /*#__PURE__*/React.createElement(Card, {
            tone: "default",
            padding: "none",
            className: "k-fade",
            style: {
              animationDelay: '480ms',
              overflow: 'hidden'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              padding: '20px 24px',
              borderBottom: '1px solid var(--border-hairline)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }
          }, /*#__PURE__*/React.createElement("span", {
            className: "k-label"
          }, "Live briefs"), /*#__PURE__*/React.createElement("span", {
            className: "k-pulse"
          }, /*#__PURE__*/React.createElement(Badge, {
            tone: "success",
            dot: true
          }, "34 open"))), /*#__PURE__*/React.createElement("div", {
            style: {
              padding: 16,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              background: 'var(--warm-white)'
            }
          }, /*#__PURE__*/React.createElement(GigCard, {
            title: "Review a SaaS reseller agreement",
            client: "Aurelis Studio",
            location: "Remote \xB7 Berlin",
            rate: "\u20AC480",
            period: "fixed",
            tags: ['SaaS & IT'],
            badge: "Day-cap safe",
            posted: "Posted 2h ago",
            onClick: () => go('work')
          }), /*#__PURE__*/React.createElement(GigCard, {
            title: "DPA and SCC pack for a cloud migration",
            client: "Ferrow Rechtsanw\xE4lte",
            location: "M\xFCnchen",
            rate: "\u20AC34",
            period: "hour",
            tags: ['Data protection'],
            posted: "Posted today",
            onClick: () => go('work')
          }))))), /*#__PURE__*/React.createElement("section", {
            style: {
              padding: '56px 40px',
              background: 'var(--parchment)'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              maxWidth: 'var(--maxw-content)',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: 16
            }
          }, [{
            label: 'Students earning',
            node: /*#__PURE__*/React.createElement(Figure, {
              to: 2400,
              suffix: "+"
            })
          }, {
            label: 'Avg. fee per brief',
            node: /*#__PURE__*/React.createElement(Figure, {
              to: 410,
              prefix: "\u20AC"
            })
          }, {
            label: 'Paid through escrow',
            node: /*#__PURE__*/React.createElement(Figure, {
              to: 2.1,
              prefix: "\u20AC",
              suffix: "M",
              decimals: 1
            })
          }, {
            label: 'Visa breaches',
            node: /*#__PURE__*/React.createElement(Figure, {
              to: 0
            }),
            delta: 'Day caps enforced'
          }].map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
            key: s.label,
            delay: i * 90
          }, /*#__PURE__*/React.createElement(StatTile, {
            label: s.label,
            value: s.node,
            delta: s.delta
          }))))), /*#__PURE__*/React.createElement("section", {
            style: {
              padding: '88px 40px',
              maxWidth: 'var(--maxw-content)',
              margin: '0 auto'
            }
          }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
            className: "k-eyebrow",
            style: {
              marginBottom: 14
            }
          }, "How it works"), /*#__PURE__*/React.createElement("h2", {
            style: {
              font: '300 40px/1.15 var(--font-serif)',
              color: 'var(--text-strong)',
              marginBottom: 48,
              maxWidth: '22ch'
            }
          }, "Four steps from brief to bank transfer")), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: 20
            }
          }, [['search', 'Get matched', 'We surface briefs that match your practice area, jurisdiction and remaining §16b working days.'], ['gavel', 'Bid your terms', 'Send a scope, a fee and a timeline. No auctions, no race to the bottom.'], ['file-signature', 'Sign the contract', 'Kontrak generates the engagement letter under German law. Both sides sign in the app.'], ['wallet', 'Get paid', 'The client funds escrow before you start. Funds release on sign-off.']].map(([ic, t, d], i) => /*#__PURE__*/React.createElement(Reveal, {
            key: t,
            delay: i * 110
          }, /*#__PURE__*/React.createElement(Card, {
            tone: "outline",
            padding: "sm",
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              height: '100%'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }
          }, /*#__PURE__*/React.createElement(Icon, {
            name: ic,
            size: 22,
            color: "var(--navy-700)"
          }), /*#__PURE__*/React.createElement("span", {
            style: {
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'var(--fs-2xl)',
              color: 'var(--gold-200)'
            }
          }, "0", i + 1)), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'var(--fs-md)',
              color: 'var(--text-strong)'
            }
          }, t), /*#__PURE__*/React.createElement("p", {
            style: {
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'var(--fs-base)',
              lineHeight: 1.6,
              color: 'var(--text-muted)'
            }
          }, d)))))), /*#__PURE__*/React.createElement("section", {
            style: {
              padding: '0 40px 88px',
              maxWidth: 'var(--maxw-content)',
              margin: '0 auto'
            }
          }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Card, {
            tone: "navy",
            padding: "lg",
            style: {
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 56,
              alignItems: 'center'
            }
          }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-tiny)',
              letterSpacing: 'var(--ls-eyebrow)',
              textTransform: 'uppercase',
              color: 'var(--gold-400)',
              marginBottom: 16
            }
          }, "Built for German student permits"), /*#__PURE__*/React.createElement("h3", {
            style: {
              font: '300 32px/1.2 var(--font-serif)',
              color: '#fff',
              marginBottom: 16
            }
          }, "Your 140 days are a hard limit, not a warning"), /*#__PURE__*/React.createElement("p", {
            style: {
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'var(--fs-md)',
              lineHeight: 1.65,
              color: 'var(--text-on-navy-muted)',
              marginBottom: 24
            }
          }, "Non-EU students may work 140 full days or 280 half days per calendar year, and 20 hours a week in the lecture period. Kontrak blocks bids that would breach either limit, logs every billed hour against the contract, and keeps an exportable record for your Ausl\xE4nderbeh\xF6rde."), /*#__PURE__*/React.createElement(Button, {
            variant: "onNavy",
            size: "sm",
            style: {
              marginBottom: 20
            },
            onClick: () => go('visa'),
            iconRight: /*#__PURE__*/React.createElement(Icon, {
              name: "arrow-right",
              size: 15
            })
          }, "Read the German rules"), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              gap: 8,
              flexWrap: 'wrap'
            }
          }, ['140 full days / year', '20 h/week in lecture period', '€13.90 statutory floor', 'Exportable hour log'].map(t => /*#__PURE__*/React.createElement("span", {
            key: t,
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)',
              padding: '5px 12px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--border-inverse)',
              color: 'rgba(255,255,255,0.8)'
            }
          }, t)))), /*#__PURE__*/React.createElement("div", {
            style: {
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--border-inverse)',
              borderRadius: 'var(--radius-md)',
              padding: 28
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: 12
            }
          }, /*#__PURE__*/React.createElement("span", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-micro-plus)',
              letterSpacing: 'var(--ls-label-xs)',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)'
            }
          }, "This week"), /*#__PURE__*/React.createElement("span", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)',
              color: '#fff'
            }
          }, "12.5 / 20 h")), /*#__PURE__*/React.createElement(Meter, null), [['Contract review · Aurelis', '6.0 h'], ['DPA pack · Ferrow Rechtsanwälte', '4.5 h'], ['Research memo · Halden & Co', '2.0 h']].map(([n, hh]) => /*#__PURE__*/React.createElement("div", {
            key: n,
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px 0',
              borderTop: '1px solid var(--border-inverse)',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)'
            }
          }, /*#__PURE__*/React.createElement("span", {
            style: {
              color: 'rgba(255,255,255,0.72)'
            }
          }, n), /*#__PURE__*/React.createElement("span", {
            style: {
              color: '#fff'
            }
          }, hh))))))), /*#__PURE__*/React.createElement("section", {
            style: {
              padding: '0 40px 96px',
              maxWidth: 'var(--maxw-narrow)',
              margin: '0 auto',
              textAlign: 'center'
            }
          }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
            style: {
              width: 1.5,
              height: 52,
              background: 'var(--rule-fade)',
              margin: '0 auto 28px'
            }
          }), /*#__PURE__*/React.createElement("p", {
            style: {
              font: '300 32px/1.35 var(--font-serif)',
              color: 'var(--text-strong)',
              marginBottom: 20
            }
          }, "\u201CI billed 180 hours in my second year without once guessing whether I was allowed to.\u201D"), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-micro-plus)',
              letterSpacing: 'var(--ls-label-xs)',
              textTransform: 'uppercase',
              color: 'var(--text-faint)'
            }
          }, "Aisha R. \xB7 LLM candidate, Humboldt-Universit\xE4t zu Berlin \xB7 Kontrak since 2024"))));
        }

        /* Hour meter that fills once, when the band is reached. */
        function Meter() {
          const ref = React.useRef(null);
          const [w, setW] = React.useState(0);
          React.useEffect(() => {
            const el = ref.current;
            if (!el) return;
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
              setW(62);
              return;
            }
            const io = new IntersectionObserver(([e]) => {
              if (e.isIntersecting) {
                setW(62);
                io.disconnect();
              }
            }, {
              rootMargin: '-10% 0px'
            });
            io.observe(el);
            return () => io.disconnect();
          }, []);
          return /*#__PURE__*/React.createElement("div", {
            ref: ref,
            style: {
              height: 6,
              borderRadius: 3,
              background: 'rgba(255,255,255,0.12)',
              overflow: 'hidden',
              marginBottom: 22
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              width: w + '%',
              height: '100%',
              background: 'var(--gold-500)',
              transition: 'width 1100ms var(--ease-out)'
            }
          }));
        }
        Object.assign(window, {
          Home
        });
      })();
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/Home.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/Pricing.jsx
  try {
    (() => {
      (function () {
        const {
          Button,
          Card,
          Badge,
          Icon,
          Tabs,
          Tooltip
        } = window.KontrakDesignSystem_5cbea0;
        const PLANS = [{
          name: 'Student',
          price: 'Free',
          unit: '',
          line: 'You keep your fee. We take nothing from the student side.',
          items: ['Unlimited bids', 'Day-account tracking', 'Engagement letter generated', 'Escrow protection', 'Exportable hour log for your Ausländerbehörde'],
          cta: 'Join as a student',
          tone: 'default'
        }, {
          name: 'Client · Pay per brief',
          price: '8%',
          unit: 'of the engagement fee',
          line: 'Charged only when work completes. No listing fee.',
          items: ['Unlimited briefs', 'Verified students only', 'Escrow held in EUR', 'Engagement letter under German law', 'Monthly invoice with VAT'],
          cta: 'Post a brief',
          tone: 'accent',
          featured: true
        }, {
          name: 'Client · Chambers',
          price: '€490',
          unit: 'per month',
          line: 'For firms running continuous overflow work.',
          items: ['5% engagement fee', 'Named account manager', 'Framework agreement', 'Bulk hour reporting', 'SSO and shared billing'],
          cta: 'Talk to us',
          tone: 'default'
        }];
        const FEES = [['Engagement fee (pay per brief)', '8% of fee', 'Client'], ['Engagement fee (Chambers)', '5% of fee', 'Client'], ['Escrow handling', 'Included', '—'], ['SEPA payout', 'Included', '—'], ['Non-EUR payout', '1.2% FX', 'Student'], ['Dispute mediation', 'Included', '—']];
        function Pricing({
          go
        }) {
          const [cycle, setCycle] = React.useState('Monthly');
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
            style: {
              padding: '56px 40px 40px',
              maxWidth: 'var(--maxw-content)',
              margin: '0 auto'
            }
          }, /*#__PURE__*/React.createElement("div", {
            className: "k-eyebrow",
            style: {
              marginBottom: 14
            }
          }, "Pricing"), /*#__PURE__*/React.createElement("h1", {
            style: {
              font: '300 46px/1.12 var(--font-serif)',
              color: 'var(--text-strong)',
              marginBottom: 16,
              maxWidth: '26ch'
            }
          }, "Students pay nothing. Clients pay on completion."), /*#__PURE__*/React.createElement("p", {
            style: {
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'var(--fs-lg)',
              lineHeight: 1.6,
              color: 'var(--text-muted)',
              maxWidth: '58ch',
              marginBottom: 24
            }
          }, "All figures in EUR, excluding VAT. Escrow is held with a licensed payment institution in the EEA."), /*#__PURE__*/React.createElement(Tabs, {
            variant: "segmented",
            value: cycle,
            onChange: setCycle,
            items: ['Monthly', 'Annual · 2 months free']
          })), /*#__PURE__*/React.createElement("section", {
            style: {
              padding: '0 40px 56px',
              maxWidth: 'var(--maxw-content)',
              margin: '0 auto'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: 20,
              alignItems: 'stretch'
            }
          }, PLANS.map(p => /*#__PURE__*/React.createElement(Card, {
            key: p.name,
            tone: p.featured ? 'accent' : 'outline',
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 18
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }
          }, /*#__PURE__*/React.createElement("span", {
            className: "k-label"
          }, p.name), p.featured && /*#__PURE__*/React.createElement(Badge, {
            tone: "gold"
          }, "Most used")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
            style: {
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'var(--fs-5xl)',
              color: 'var(--text-strong)',
              lineHeight: 1
            }
          }, p.name === 'Client · Chambers' && cycle !== 'Monthly' ? '€408' : p.price), p.unit && /*#__PURE__*/React.createElement("span", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)',
              color: 'var(--text-muted)',
              marginLeft: 8
            }
          }, p.unit)), /*#__PURE__*/React.createElement("p", {
            style: {
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'var(--fs-base)',
              lineHeight: 1.6,
              color: 'var(--text-muted)'
            }
          }, p.line), /*#__PURE__*/React.createElement("div", {
            style: {
              height: 1,
              background: 'var(--border-hairline)'
            }
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              flex: 1
            }
          }, p.items.map(i => /*#__PURE__*/React.createElement("span", {
            key: i,
            style: {
              display: 'flex',
              gap: 10,
              alignItems: 'flex-start',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-base)',
              lineHeight: 1.5,
              color: 'var(--text-body)'
            }
          }, /*#__PURE__*/React.createElement(Icon, {
            name: "check",
            size: 16,
            color: "var(--gold-700)",
            style: {
              marginTop: 2
            }
          }), i))), /*#__PURE__*/React.createElement(Button, {
            variant: p.featured ? 'accent' : 'secondary',
            block: true,
            onClick: () => go(p.name === 'Student' ? 'signup' : 'clients')
          }, p.cta))))), /*#__PURE__*/React.createElement("section", {
            style: {
              padding: '0 40px 56px',
              maxWidth: 'var(--maxw-content)',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: '1.3fr 1fr',
              gap: 20,
              alignItems: 'start'
            }
          }, /*#__PURE__*/React.createElement(Card, {
            padding: "none",
            style: {
              overflow: 'hidden'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr',
              background: 'var(--parchment)'
            }
          }, ['Fee', 'Amount', 'Paid by'].map(h => /*#__PURE__*/React.createElement("div", {
            key: h,
            style: {
              padding: '14px 20px',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-micro-plus)',
              letterSpacing: 'var(--ls-label-xs)',
              textTransform: 'uppercase',
              color: 'var(--text-muted)'
            }
          }, h))), FEES.map(row => /*#__PURE__*/React.createElement("div", {
            key: row[0],
            style: {
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr',
              borderTop: '1px solid var(--border-hairline)'
            }
          }, row.map((c, i) => /*#__PURE__*/React.createElement("div", {
            key: i,
            style: {
              padding: '16px 20px',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-base)',
              color: i === 0 ? 'var(--text-body)' : 'var(--text-muted)',
              fontWeight: i === 1 ? 500 : 300
            }
          }, c))))), /*#__PURE__*/React.createElement(Card, {
            tone: "navy"
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-micro-plus)',
              letterSpacing: 'var(--ls-label-xs)',
              textTransform: 'uppercase',
              color: 'var(--text-on-navy-muted)',
              marginBottom: 16
            }
          }, "Worked example"), [['Brief fee', '€480'], ['Scoped hours', '14 h'], ['Effective rate', '€34.29 / h'], ['Statutory floor', '€13.90 / h'], ['Platform fee (8%)', '€38.40'], ['Student receives', '€480.00'], ['Client pays', '€518.40']].map(([l, v], i, arr) => /*#__PURE__*/React.createElement("div", {
            key: l,
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              padding: '11px 0',
              borderTop: '1px solid var(--border-inverse)',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)'
            }
          }, /*#__PURE__*/React.createElement("span", {
            style: {
              color: 'rgba(255,255,255,0.66)'
            }
          }, l), /*#__PURE__*/React.createElement("span", {
            style: {
              color: i >= arr.length - 2 ? 'var(--gold-400)' : '#fff',
              fontFamily: 'var(--font-display)',
              fontWeight: 600
            }
          }, v))))), /*#__PURE__*/React.createElement("section", {
            style: {
              padding: '0 40px 96px',
              maxWidth: 'var(--maxw-narrow)',
              margin: '0 auto'
            }
          }, /*#__PURE__*/React.createElement("div", {
            className: "k-eyebrow",
            style: {
              marginBottom: 20
            }
          }, "Questions we get"), [['Do students ever pay a fee?', 'No. Bidding, contracts, escrow and the exportable hour log are free for students.'], ['When is the platform fee charged?', 'On release of escrow, against the completed engagement. Cancelled briefs cost nothing.'], ['What happens if a brief goes over its scoped hours?', 'The student cannot log hours past the scope without your written approval in-app, and never past their remaining day-account balance.'], ['Is VAT included?', 'No. German VAT at 19% is added on the platform fee and shown on your monthly invoice.']].map(([q, a]) => /*#__PURE__*/React.createElement("div", {
            key: q,
            style: {
              padding: '20px 0',
              borderTop: '1px solid var(--border-hairline)'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'var(--fs-md)',
              color: 'var(--text-strong)',
              marginBottom: 8
            }
          }, q), /*#__PURE__*/React.createElement("p", {
            style: {
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'var(--fs-base)',
              lineHeight: 1.65,
              color: 'var(--text-muted)'
            }
          }, a)))));
        }
        Object.assign(window, {
          Pricing
        });
      })();
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/Pricing.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/SignUp.jsx
  try {
    (() => {
      (function () {
        const {
          Button,
          Card,
          Logo,
          Field,
          Input,
          Select,
          Checkbox,
          Radio,
          Stepper,
          Icon
        } = window.KontrakDesignSystem_5cbea0;
        function SignUp({
          go
        }) {
          const [role, setRole] = React.useState('student');
          const [ok, setOk] = React.useState(false);
          return /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              minHeight: 'calc(100vh - 76px)'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              padding: '72px 64px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              maxWidth: 560,
              margin: '0 auto'
            }
          }, /*#__PURE__*/React.createElement("div", {
            className: "k-eyebrow",
            style: {
              marginBottom: 14
            }
          }, "Create your account"), /*#__PURE__*/React.createElement("h1", {
            style: {
              font: '300 40px/1.15 var(--font-serif)',
              color: 'var(--text-strong)',
              marginBottom: 28
            }
          }, "Start billing legal hours"), /*#__PURE__*/React.createElement(Stepper, {
            steps: ['Account', 'Verify', 'Practice areas'],
            current: 0,
            style: {
              marginBottom: 32
            }
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 18
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              gap: 12
            }
          }, /*#__PURE__*/React.createElement(Card, {
            tone: role === 'student' ? 'accent' : 'outline',
            padding: "sm",
            interactive: true,
            onClick: () => setRole('student'),
            style: {
              flex: 1
            }
          }, /*#__PURE__*/React.createElement(Radio, {
            checked: role === 'student',
            label: "I'm a student",
            description: "Bid on briefs, bill hours",
            onChange: () => setRole('student')
          })), /*#__PURE__*/React.createElement(Card, {
            tone: role === 'client' ? 'accent' : 'outline',
            padding: "sm",
            interactive: true,
            onClick: () => setRole('client'),
            style: {
              flex: 1
            }
          }, /*#__PURE__*/React.createElement(Radio, {
            checked: role === 'client',
            label: "I'm hiring",
            description: "Post briefs, fund escrow",
            onChange: () => setRole('client')
          }))), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 12
            }
          }, /*#__PURE__*/React.createElement(Field, {
            label: "First name",
            htmlFor: "f"
          }, /*#__PURE__*/React.createElement(Input, {
            id: "f",
            placeholder: "Aisha"
          })), /*#__PURE__*/React.createElement(Field, {
            label: "Last name",
            htmlFor: "l"
          }, /*#__PURE__*/React.createElement(Input, {
            id: "l",
            placeholder: "Rahman"
          }))), /*#__PURE__*/React.createElement(Field, {
            label: "University email",
            htmlFor: "em",
            hint: "We verify enrolment with your institution."
          }, /*#__PURE__*/React.createElement(Input, {
            id: "em",
            placeholder: "a.rahman@hu-berlin.de"
          })), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 12
            }
          }, /*#__PURE__*/React.createElement(Field, {
            label: "Residence permit",
            htmlFor: "v"
          }, /*#__PURE__*/React.createElement(Select, {
            id: "v",
            placeholder: "Select",
            options: ['§16b student permit (non-EU)', 'EU / EEA citizen', '§16f language course', '§20 job-seeking permit']
          })), /*#__PURE__*/React.createElement(Field, {
            label: "Work allowance",
            htmlFor: "h"
          }, /*#__PURE__*/React.createElement(Select, {
            id: "h",
            placeholder: "Select",
            options: ['140 full / 280 half days', '20 h per week (lecture period)', 'No restriction (EU/EEA)']
          }))), /*#__PURE__*/React.createElement(Checkbox, {
            checked: ok,
            onChange: () => setOk(!ok),
            label: "I confirm my permit allows paid employment",
            description: "Kontrak enforces your 140-day account and keeps an exportable hour log for your Ausl\xE4nderbeh\xF6rde."
          }), /*#__PURE__*/React.createElement(Button, {
            variant: "accent",
            size: "lg",
            disabled: !ok,
            onClick: () => go('work'),
            iconRight: /*#__PURE__*/React.createElement(Icon, {
              name: "arrow-right",
              size: 17
            })
          }, "Continue to verification"), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)',
              color: 'var(--text-muted)'
            }
          }, "Already on Kontrak? ", /*#__PURE__*/React.createElement("a", {
            onClick: () => go('work'),
            style: {
              cursor: 'pointer'
            }
          }, "Log in")))), /*#__PURE__*/React.createElement("div", {
            style: {
              background: 'var(--navy-900)',
              padding: '72px 64px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 32
            }
          }, /*#__PURE__*/React.createElement(Logo, {
            tone: "onNavy",
            size: 52
          }), /*#__PURE__*/React.createElement("p", {
            style: {
              font: '300 30px/1.35 var(--font-serif)',
              color: '#fff',
              maxWidth: '26ch'
            }
          }, "Every engagement on Kontrak is a signed contract under German law, with the fee already in escrow."), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 14
            }
          }, [['badge-check', 'Enrolment verified with your university'], ['shield-check', '§16b day account tracked automatically'], ['scale', 'No brief below the €13.90 statutory floor'], ['wallet', 'Fees released only on sign-off'], ['file-signature', 'Engagement letter generated for you']].map(([ic, t]) => /*#__PURE__*/React.createElement("span", {
            key: t,
            style: {
              display: 'flex',
              gap: 12,
              alignItems: 'center',
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'var(--fs-md)',
              color: 'var(--text-on-navy-muted)'
            }
          }, /*#__PURE__*/React.createElement(Icon, {
            name: ic,
            size: 18,
            color: "var(--gold-400)"
          }), t)))));
        }
        Object.assign(window, {
          SignUp
        });
      })();
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/SignUp.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/VisaRules.jsx
  try {
    (() => {
      (function () {
        const {
          Button,
          Card,
          Badge,
          Tag,
          Tabs,
          Icon,
          StatTile,
          Stepper,
          Tooltip
        } = window.KontrakDesignSystem_5cbea0;
        const MODELS = [{
          name: 'Minijob',
          hours: '≈ 43.4 h / month',
          ceiling: '€603 / month gross',
          tax: 'No income tax, flat employer levy',
          kontrak: 'Fee capped so your month stays under €603'
        }, {
          name: 'Werkstudent',
          hours: '20 h / week in lecture period',
          ceiling: '≈ €1,205 / month at €13.90',
          tax: 'Pension only (9.3%); no health, care or unemployment',
          kontrak: 'Weekly cap enforced before you can bid'
        }, {
          name: 'Fixed-fee brief',
          hours: 'Counts as full or half days',
          ceiling: '140 full / 280 half days per year',
          tax: 'Depends on your permit wording',
          kontrak: 'Effective hourly shown before you accept'
        }];
        const WAGE = [{
          year: '2025',
          rate: '€12.82',
          note: 'Previous statutory floor'
        }, {
          year: '2026',
          rate: '€13.90',
          note: 'In force since 1 January 2026',
          now: true
        }, {
          year: '2027',
          rate: '€14.60',
          note: 'Already legislated'
        }];
        const LOG = [{
          name: 'Contract review · Aurelis Studio',
          days: '8 full days',
          hours: '52 h'
        }, {
          name: 'NDA pack · Ferrow Rechtsanwälte',
          days: '6 half days',
          hours: '21 h'
        }, {
          name: 'Research memo · Halden & Co',
          days: '4 full days',
          hours: '27 h'
        }, {
          name: 'HiWi · Chair of Private Law',
          days: 'Exempt',
          hours: '64 h',
          exempt: true
        }];
        function VisaRules({
          go
        }) {
          const [model, setModel] = React.useState('Werkstudent');
          const [rate, setRate] = React.useState(32);
          const [hours, setHours] = React.useState(12);
          const monthly = Math.round(rate * hours * 4.33);
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
            style: {
              background: 'var(--parchment)',
              padding: '56px 40px 48px'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              maxWidth: 'var(--maxw-content)',
              margin: '0 auto'
            }
          }, /*#__PURE__*/React.createElement("div", {
            className: "k-eyebrow",
            style: {
              marginBottom: 14
            }
          }, "Visa & rules \xB7 Germany"), /*#__PURE__*/React.createElement("h1", {
            style: {
              font: '300 48px/1.12 var(--font-serif)',
              color: 'var(--text-strong)',
              marginBottom: 18,
              maxWidth: '24ch'
            }
          }, "What German student rules let you bill"), /*#__PURE__*/React.createElement("p", {
            style: {
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'var(--fs-lg)',
              lineHeight: 1.6,
              color: 'var(--text-muted)',
              maxWidth: '62ch',
              marginBottom: 20
            }
          }, "Every brief on Kontrak is checked against the residence-permit limits in \xA716b of the Aufenthaltsgesetz and the statutory minimum wage under the Mindestlohngesetz. These are the numbers we enforce."), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              gap: 10,
              alignItems: 'center',
              flexWrap: 'wrap'
            }
          }, /*#__PURE__*/React.createElement(Badge, {
            tone: "navy"
          }, "Non-EU \xB7 \xA716b residence permit"), /*#__PURE__*/React.createElement(Badge, {
            tone: "neutral"
          }, "Reviewed 28 Aug 2026")))), /*#__PURE__*/React.createElement("section", {
            style: {
              padding: '40px',
              maxWidth: 'var(--maxw-content)',
              margin: '0 auto'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: 16
            }
          }, /*#__PURE__*/React.createElement(StatTile, {
            label: "Statutory minimum wage",
            value: "\u20AC13.90",
            delta: "per hour, since 01.01.2026"
          }), /*#__PURE__*/React.createElement(StatTile, {
            label: "Annual work allowance",
            value: "140",
            delta: "full days, or 280 half days"
          }), /*#__PURE__*/React.createElement(StatTile, {
            label: "Lecture-period cap",
            value: "20 h",
            delta: "per week across all employers"
          }), /*#__PURE__*/React.createElement(StatTile, {
            tone: "navy",
            label: "Minijob ceiling",
            value: "\u20AC603",
            delta: "per month \xB7 \u2248 43.4 h"
          }))), /*#__PURE__*/React.createElement("section", {
            style: {
              padding: '0 40px 48px',
              maxWidth: 'var(--maxw-content)',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: '1.25fr 1fr',
              gap: 20,
              alignItems: 'start'
            }
          }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
            className: "k-label",
            style: {
              marginBottom: 14
            }
          }, "The day account \xB7 \xA716b(3) AufenthG"), /*#__PURE__*/React.createElement("h2", {
            style: {
              font: '300 28px/1.25 var(--font-serif)',
              color: 'var(--text-strong)',
              marginBottom: 16
            }
          }, "140 full days, 280 half days, one calendar year"), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'var(--fs-md)',
              lineHeight: 1.7,
              color: 'var(--text-body)',
              display: 'flex',
              flexDirection: 'column',
              gap: 12
            }
          }, /*#__PURE__*/React.createElement("p", null, "Since 1 March 2024 the allowance is 140 full working days or 280 half working days per calendar year, raised from 120 / 240. A day of more than four hours is a full day; four hours or fewer is a half day. One full day equals two half days, and the two buckets can be mixed."), /*#__PURE__*/React.createElement("p", null, "The account resets on 1 January and runs to 31 December \u2014 not with your academic year. If you arrive in September, you still get the whole 140 days for that year.")), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 16,
              marginTop: 24
            }
          }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
            className: "k-label",
            style: {
              marginBottom: 10
            }
          }, "Counts against the cap"), ['Paid briefs through Kontrak', 'Werkstudent and Minijob days', 'Days worked for any other employer'].map(t => /*#__PURE__*/React.createElement("div", {
            key: t,
            style: {
              display: 'flex',
              gap: 9,
              alignItems: 'flex-start',
              padding: '6px 0',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-base)',
              color: 'var(--text-body)'
            }
          }, /*#__PURE__*/React.createElement(Icon, {
            name: "dot",
            size: 16,
            color: "var(--navy-500)"
          }), t))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
            className: "k-label",
            style: {
              marginBottom: 10
            }
          }, "Exempt"), ['HiWi work at your university', 'Mandatory curriculum internships', 'Sick days and paid holiday'].map(t => /*#__PURE__*/React.createElement("div", {
            key: t,
            style: {
              display: 'flex',
              gap: 9,
              alignItems: 'flex-start',
              padding: '6px 0',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-base)',
              color: 'var(--text-body)'
            }
          }, /*#__PURE__*/React.createElement(Icon, {
            name: "check",
            size: 16,
            color: "var(--success)"
          }), t))))), /*#__PURE__*/React.createElement(Card, {
            tone: "navy"
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: 16
            }
          }, /*#__PURE__*/React.createElement("span", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-micro-plus)',
              letterSpacing: 'var(--ls-label-xs)',
              textTransform: 'uppercase',
              color: 'var(--text-on-navy-muted)'
            }
          }, "Your day account \xB7 2026"), /*#__PURE__*/React.createElement(Badge, {
            tone: "gold"
          }, "Example")), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'var(--fs-5xl)',
              color: '#fff',
              lineHeight: 1
            }
          }, "86", /*#__PURE__*/React.createElement("span", {
            style: {
              fontSize: 'var(--fs-xl)',
              color: 'var(--text-on-navy-muted)'
            }
          }, " / 140")), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)',
              color: 'var(--text-on-navy-muted)',
              margin: '8px 0 16px'
            }
          }, "full days used \xB7 54 remaining"), /*#__PURE__*/React.createElement("div", {
            style: {
              height: 6,
              borderRadius: 3,
              background: 'rgba(255,255,255,0.12)',
              overflow: 'hidden',
              marginBottom: 20
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              width: '61%',
              height: '100%',
              background: 'var(--gold-500)'
            }
          })), LOG.map(l => /*#__PURE__*/React.createElement("div", {
            key: l.name,
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              gap: 12,
              padding: '11px 0',
              borderTop: '1px solid var(--border-inverse)',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)'
            }
          }, /*#__PURE__*/React.createElement("span", {
            style: {
              color: 'rgba(255,255,255,0.72)'
            }
          }, l.name), /*#__PURE__*/React.createElement("span", {
            style: {
              color: l.exempt ? 'var(--gold-400)' : '#fff',
              whiteSpace: 'nowrap'
            }
          }, l.days))))), /*#__PURE__*/React.createElement("section", {
            style: {
              padding: '0 40px 48px',
              maxWidth: 'var(--maxw-content)',
              margin: '0 auto'
            }
          }, /*#__PURE__*/React.createElement("div", {
            className: "k-eyebrow",
            style: {
              marginBottom: 14
            }
          }, "Work models"), /*#__PURE__*/React.createElement("h2", {
            style: {
              font: '300 34px/1.2 var(--font-serif)',
              color: 'var(--text-strong)',
              marginBottom: 24
            }
          }, "Three ways students bill on Kontrak"), /*#__PURE__*/React.createElement(Card, {
            padding: "none",
            style: {
              overflow: 'hidden'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'grid',
              gridTemplateColumns: '1fr 1.1fr 1.1fr 1.4fr 1.4fr',
              background: 'var(--parchment)'
            }
          }, ['Model', 'Hours', 'Ceiling', 'Social security', 'What Kontrak does'].map(h => /*#__PURE__*/React.createElement("div", {
            key: h,
            style: {
              padding: '14px 20px',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-micro-plus)',
              letterSpacing: 'var(--ls-label-xs)',
              textTransform: 'uppercase',
              color: 'var(--text-muted)'
            }
          }, h))), MODELS.map(m => /*#__PURE__*/React.createElement("div", {
            key: m.name,
            style: {
              display: 'grid',
              gridTemplateColumns: '1fr 1.1fr 1.1fr 1.4fr 1.4fr',
              borderTop: '1px solid var(--border-hairline)'
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              padding: '18px 20px',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'var(--fs-base)',
              color: 'var(--text-strong)'
            }
          }, m.name), [m.hours, m.ceiling, m.tax, m.kontrak].map((v, i) => /*#__PURE__*/React.createElement("div", {
            key: i,
            style: {
              padding: '18px 20px',
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'var(--fs-base)',
              lineHeight: 1.55,
              color: i === 3 ? 'var(--text-body)' : 'var(--text-muted)'
            }
          }, v)))))), /*#__PURE__*/React.createElement("section", {
            style: {
              padding: '0 40px 48px',
              maxWidth: 'var(--maxw-content)',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: '1fr 1.15fr',
              gap: 20,
              alignItems: 'start'
            }
          }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
            className: "k-label",
            style: {
              marginBottom: 14
            }
          }, "Minimum wage \xB7 MiLoG"), /*#__PURE__*/React.createElement("h3", {
            style: {
              font: '300 26px/1.25 var(--font-serif)',
              color: 'var(--text-strong)',
              marginBottom: 18
            }
          }, "The floor applies to you too"), /*#__PURE__*/React.createElement("p", {
            style: {
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'var(--fs-base)',
              lineHeight: 1.65,
              color: 'var(--text-muted)',
              marginBottom: 20
            }
          }, "The statutory minimum wage applies regardless of nationality. Kontrak blocks any brief whose fee divided by its scoped hours falls below the floor in force."), WAGE.map(w => /*#__PURE__*/React.createElement("div", {
            key: w.year,
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: '12px 0',
              borderTop: '1px solid var(--border-hairline)'
            }
          }, /*#__PURE__*/React.createElement("span", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)',
              color: 'var(--text-faint)',
              width: 44
            }
          }, w.year), /*#__PURE__*/React.createElement("span", {
            style: {
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'var(--fs-xl)',
              color: w.now ? 'var(--gold-700)' : 'var(--text-strong)',
              width: 86
            }
          }, w.rate), /*#__PURE__*/React.createElement("span", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)',
              color: 'var(--text-muted)',
              flex: 1
            }
          }, w.note), w.now && /*#__PURE__*/React.createElement(Badge, {
            tone: "gold"
          }, "In force")))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 18
            }
          }, /*#__PURE__*/React.createElement("span", {
            className: "k-label"
          }, "Earnings estimator"), /*#__PURE__*/React.createElement(Tabs, {
            variant: "segmented",
            value: model,
            onChange: setModel,
            items: ['Minijob', 'Werkstudent']
          })), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 20,
              marginBottom: 22
            }
          }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
            className: "k-label",
            style: {
              marginBottom: 10
            }
          }, "Your rate \xB7 \u20AC", rate, " / h"), /*#__PURE__*/React.createElement("input", {
            type: "range",
            min: "13.9",
            max: "60",
            step: "1",
            value: rate,
            onChange: e => setRate(Number(e.target.value)),
            style: {
              width: '100%',
              accentColor: 'var(--gold-600)'
            }
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-xs)',
              color: 'var(--text-faint)',
              marginTop: 6
            }
          }, "Floor \u20AC13.90 \xB7 median on Kontrak \u20AC32")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
            className: "k-label",
            style: {
              marginBottom: 10
            }
          }, "Hours per week \xB7 ", hours, " h"), /*#__PURE__*/React.createElement("input", {
            type: "range",
            min: "2",
            max: "20",
            step: "1",
            value: hours,
            onChange: e => setHours(Number(e.target.value)),
            style: {
              width: '100%',
              accentColor: 'var(--gold-600)'
            }
          }), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-xs)',
              color: 'var(--text-faint)',
              marginTop: 6
            }
          }, "Lecture-period cap 20 h"))), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: 20,
              padding: '20px 0',
              borderTop: '1px solid var(--border-hairline)'
            }
          }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
            className: "k-label",
            style: {
              marginBottom: 6
            }
          }, "Gross per month"), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'var(--fs-4xl)',
              color: 'var(--text-strong)',
              lineHeight: 1
            }
          }, "\u20AC", monthly.toLocaleString('en-GB'))), /*#__PURE__*/React.createElement("div", {
            style: {
              textAlign: 'right'
            }
          }, /*#__PURE__*/React.createElement("div", {
            className: "k-label",
            style: {
              marginBottom: 6
            }
          }, "Days billed / year"), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'var(--fs-2xl)',
              color: 'var(--text-strong)'
            }
          }, "\u2248 ", Math.min(140, Math.round(hours / 4 * 52)), " half days"))), model === 'Minijob' && monthly > 603 && /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              gap: 10,
              padding: '14px 16px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--warning-soft)',
              marginTop: 4
            }
          }, /*#__PURE__*/React.createElement(Icon, {
            name: "triangle-alert",
            size: 17,
            color: "var(--warning)"
          }), /*#__PURE__*/React.createElement("span", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)',
              lineHeight: 1.55,
              color: 'var(--text-body)'
            }
          }, "Over the \u20AC603 Minijob ceiling. At this rate the engagement becomes a Midijob and full social contributions apply.")), model === 'Werkstudent' && /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              gap: 10,
              padding: '14px 16px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--surface-accent-soft)',
              border: '1px solid var(--gold-200)',
              marginTop: 4
            }
          }, /*#__PURE__*/React.createElement(Icon, {
            name: "info",
            size: 17,
            color: "var(--gold-700)"
          }), /*#__PURE__*/React.createElement("span", {
            style: {
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)',
              lineHeight: 1.55,
              color: 'var(--text-body)'
            }
          }, "Werkstudent status exempts you from health, care and unemployment contributions. Pension insurance of 9.3% still applies.")))), /*#__PURE__*/React.createElement("section", {
            style: {
              padding: '0 40px 48px',
              maxWidth: 'var(--maxw-content)',
              margin: '0 auto'
            }
          }, /*#__PURE__*/React.createElement(Card, {
            tone: "outline",
            style: {
              display: 'grid',
              gridTemplateColumns: 'auto 1fr auto',
              gap: 24,
              alignItems: 'center'
            }
          }, /*#__PURE__*/React.createElement(Icon, {
            name: "shield-alert",
            size: 26,
            color: "var(--danger)"
          }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'var(--fs-md)',
              color: 'var(--text-strong)',
              marginBottom: 8
            }
          }, "Freelance and self-employed work needs separate permission"), /*#__PURE__*/React.createElement("p", {
            style: {
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'var(--fs-base)',
              lineHeight: 1.6,
              color: 'var(--text-muted)',
              maxWidth: '80ch'
            }
          }, "A \xA716b permit covers employment, not self-employment. Freelancing generally requires approval from your Ausl\xE4nderbeh\xF6rde, and the wording on your permit is what governs. Kontrak asks for your permit wording during verification and routes engagements accordingly \u2014 but the decision sits with your authority, not with us.")), /*#__PURE__*/React.createElement(Button, {
            variant: "secondary",
            onClick: () => go('signup')
          }, "Check my permit"))), /*#__PURE__*/React.createElement("section", {
            style: {
              padding: '0 40px 64px',
              maxWidth: 'var(--maxw-content)',
              margin: '0 auto'
            }
          }, /*#__PURE__*/React.createElement(Card, {
            tone: "sunken"
          }, /*#__PURE__*/React.createElement("div", {
            className: "k-label",
            style: {
              marginBottom: 20
            }
          }, "How a year usually runs"), /*#__PURE__*/React.createElement(Stepper, {
            steps: ['Lecture period · 20 h/week', 'Semester break · full-time allowed', 'Lecture period · back to 20 h', '1 January · account resets'],
            current: 1
          }))), /*#__PURE__*/React.createElement("section", {
            style: {
              padding: '0 40px 88px',
              maxWidth: 'var(--maxw-narrow)',
              margin: '0 auto'
            }
          }, /*#__PURE__*/React.createElement("div", {
            className: "k-label",
            style: {
              marginBottom: 16
            }
          }, "Sources"), /*#__PURE__*/React.createElement("div", {
            style: {
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'var(--fs-sm)',
              lineHeight: 1.8,
              color: 'var(--text-muted)',
              display: 'flex',
              flexDirection: 'column',
              gap: 4
            }
          }, /*#__PURE__*/React.createElement("span", null, "\xA716b(3) Aufenthaltsgesetz \u2014 140 full / 280 half working days per calendar year, in force since 1 March 2024."), /*#__PURE__*/React.createElement("span", null, "Fifth Minimum Wage Adjustment Ordinance (MiLoV5) \u2014 \u20AC13.90 per hour from 1 January 2026, \u20AC14.60 from 1 January 2027."), /*#__PURE__*/React.createElement("span", null, "Geringf\xFCgigkeitsgrenze \u2014 \u20AC603 per month (\u20AC7,236 per year) in 2026, indexed to the minimum wage."), /*#__PURE__*/React.createElement("span", {
            style: {
              color: 'var(--text-faint)',
              marginTop: 10
            }
          }, "This page is general information, not legal advice. Your residence permit, your Ausl\xE4nderbeh\xF6rde and your university international office govern your individual case."))));
        }
        Object.assign(window, {
          VisaRules
        });
      })();
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/VisaRules.jsx",
      error: String(e && e.message || e)
    });
  }
  __ds_ns.Logo = __ds_scope.Logo;
  __ds_ns.Avatar = __ds_scope.Avatar;
  __ds_ns.Badge = __ds_scope.Badge;
  __ds_ns.Button = __ds_scope.Button;
  __ds_ns.Card = __ds_scope.Card;
  __ds_ns.LUCIDE_VERSION = __ds_scope.LUCIDE_VERSION;
  __ds_ns.Icon = __ds_scope.Icon;
  __ds_ns.IconButton = __ds_scope.IconButton;
  __ds_ns.Tag = __ds_scope.Tag;
  __ds_ns.Dialog = __ds_scope.Dialog;
  __ds_ns.Toast = __ds_scope.Toast;
  __ds_ns.Tooltip = __ds_scope.Tooltip;
  __ds_ns.Checkbox = __ds_scope.Checkbox;
  __ds_ns.Field = __ds_scope.Field;
  __ds_ns.Input = __ds_scope.Input;
  __ds_ns.Radio = __ds_scope.Radio;
  __ds_ns.Select = __ds_scope.Select;
  __ds_ns.Switch = __ds_scope.Switch;
  __ds_ns.Textarea = __ds_scope.Textarea;
  __ds_ns.GigCard = __ds_scope.GigCard;
  __ds_ns.Rating = __ds_scope.Rating;
  __ds_ns.StatTile = __ds_scope.StatTile;
  __ds_ns.Stepper = __ds_scope.Stepper;
  __ds_ns.Tabs = __ds_scope.Tabs;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/kontrak-website/lib/kontrak-ds.js", error: String((e && e.message) || e) }); }

// ui_kits/app/Briefs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(function () {
  const {
    Card,
    Input,
    Select,
    Tag,
    Switch,
    Icon,
    GigCard,
    Button,
    Tabs
  } = window.KontrakDesignSystem_5cbea0;
  const ROWS = [{
    title: 'Research memo: data transfers post-adequacy',
    client: 'Halden & Co',
    location: 'Remote · EU',
    rate: '£560',
    period: 'fixed',
    tags: ['Privacy', 'Research'],
    badge: 'Visa-safe',
    rating: 5.0,
    reviews: 9
  }, {
    title: 'Trademark filing support — 6 classes',
    client: 'Studio Mor',
    location: 'Remote',
    rate: '£300',
    period: 'fixed',
    tags: ['IP', 'Filings'],
    rating: 4.8,
    reviews: 6
  }, {
    title: 'Tenancy dispute bundle preparation',
    client: 'Bright Legal Aid',
    location: 'Manchester',
    rate: '£24',
    period: 'hour',
    tags: ['Litigation'],
    rating: 4.4,
    reviews: 31
  }, {
    title: 'Employment policy refresh for 40 staff',
    client: 'Kelvin Foods',
    location: 'Leeds',
    rate: '£480',
    period: 'fixed',
    tags: ['Employment'],
    badge: 'Visa-safe',
    rating: 4.6,
    reviews: 12
  }];
  function Briefs({
    go
  }) {
    const [areas, setAreas] = React.useState(['Privacy']);
    const [visaOnly, setVisaOnly] = React.useState(false);
    const [tab, setTab] = React.useState('matched');
    const toggle = a => setAreas(areas.includes(a) ? areas.filter(x => x !== a) : [...areas, a]);
    const rows = visaOnly ? ROWS.filter(r => r.badge) : ROWS;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '24px 32px 48px',
        display: 'flex',
        gap: 20,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      style: {
        width: 248,
        flexShrink: 0,
        position: 'sticky',
        top: 24
      },
      padding: "sm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 14
      }
    }, "Filters"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All jurisdictions",
      options: ['England & Wales', 'New York', 'Ontario', 'EU'],
      size: "sm"
    }), /*#__PURE__*/React.createElement(Select, {
      placeholder: "Any fee type",
      options: ['Fixed fee', 'Hourly', 'Retainer'],
      size: "sm"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 10
      }
    }, "Practice area"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 6
      }
    }, ['Privacy', 'IP', 'Litigation', 'Employment', 'Corporate', 'Commercial'].map(a => /*#__PURE__*/React.createElement(Tag, {
      key: a,
      selected: areas.includes(a),
      onClick: () => toggle(a)
    }, a)))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: 'var(--border-hairline)'
      }
    }), /*#__PURE__*/React.createElement(Switch, {
      checked: visaOnly,
      onChange: setVisaOnly,
      label: "Visa-safe only"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      block: true
    }, "Reset"))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "Search briefs, clients, practice areas\u2026",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "search",
        size: 15
      })
    }), /*#__PURE__*/React.createElement(Select, {
      options: ['Newest first', 'Highest fee', 'Fewest bids'],
      style: {
        width: 180
      }
    })), /*#__PURE__*/React.createElement(Tabs, {
      value: tab,
      onChange: setTab,
      items: [{
        value: 'matched',
        label: 'Matched',
        count: rows.length
      }, {
        value: 'all',
        label: 'All open',
        count: 34
      }, {
        value: 'saved',
        label: 'Saved',
        count: 4
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, rows.map(r => /*#__PURE__*/React.createElement(GigCard, _extends({
      key: r.title
    }, r, {
      onClick: () => go('contracts')
    }))))));
  }
  Object.assign(window, {
    Briefs
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Briefs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ContractDetail.jsx
try { (() => {
(function () {
  const {
    Card,
    Badge,
    Button,
    Icon,
    Stepper,
    Avatar,
    Dialog,
    Toast,
    Field,
    Input,
    Checkbox
  } = window.KontrakDesignSystem_5cbea0;
  function ContractDetail({
    go
  }) {
    const [open, setOpen] = React.useState(false);
    const [released, setReleased] = React.useState(false);
    const [agree, setAgree] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '24px 32px 48px',
        display: 'grid',
        gridTemplateColumns: '1.6fr 0.85fr',
        gap: 20,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 20,
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 10
      }
    }, "Engagement letter \xB7 KTK-2026-0413"), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: '300 26px/1.25 var(--font-serif)',
        color: 'var(--text-strong)',
        marginBottom: 10
      }
    }, "Review a SaaS reseller agreement"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      dot: true
    }, "Escrow funded"), /*#__PURE__*/React.createElement(Badge, {
      tone: "navy"
    }, "Signed 04 Sep"))), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "download",
        size: 14
      })
    }, "PDF")), /*#__PURE__*/React.createElement(Stepper, {
      steps: ['Scope', 'Bid accepted', 'Contract signed', 'Escrow released'],
      current: released ? 3 : 2
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: 'var(--border-hairline)',
        margin: '24px 0'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 18
      }
    }, [['Fee', '£420 fixed'], ['Hours billed', '6.0 of 12'], ['Deadline', '12 Sep 2026'], ['Jurisdiction', 'England & Wales']].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
      key: l
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 5
      }
    }, l), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-base)',
        color: 'var(--text-strong)'
      }
    }, v))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 16
      }
    }, "Time log"), [['05 Sep', 'First-pass mark-up', '2.5 h'], ['06 Sep', 'Risk note draft', '2.0 h'], ['08 Sep', 'Call with GC + revisions', '1.5 h']].map(([d, n, h]) => /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        display: 'flex',
        gap: 16,
        alignItems: 'center',
        padding: '12px 0',
        borderTop: '1px solid var(--border-hairline)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-base)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 64,
        color: 'var(--text-faint)',
        fontSize: 'var(--fs-sm)'
      }
    }, d), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        color: 'var(--text-body)'
      }
    }, n), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-strong)',
        fontFamily: 'var(--font-display)',
        fontWeight: 600
      }
    }, h))), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      style: {
        marginTop: 12
      },
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 14
      })
    }, "Log time")), /*#__PURE__*/React.createElement(Card, {
      tone: "sunken"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 14
      }
    }, "Clause 4 \xB7 Scope of work"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-md)',
        lineHeight: 1.75,
        color: 'var(--text-body)'
      }
    }, "The Consultant shall deliver a marked-up copy of the Reseller Agreement together with a written risk note of no more than one page, identifying provisions that materially depart from market standard in the Client's sector."))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        position: 'sticky',
        top: 24
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 14
      }
    }, "Escrow"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--fs-4xl)',
        color: 'var(--text-strong)',
        lineHeight: 1,
        marginBottom: 8
      }
    }, "\xA3420"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-muted)',
        marginBottom: 20
      }
    }, released ? 'Released 08 Sep · arriving in 1–2 days' : 'Held since 04 Sep · releases on client sign-off'), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      block: true,
      disabled: released,
      onClick: () => setOpen(true)
    }, released ? 'Released' : 'Request release')), /*#__PURE__*/React.createElement(Card, {
      padding: "sm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 14
      }
    }, "Client"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Northlane Studio",
      verified: true
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 'var(--fs-base)'
      }
    }, "Northlane Studio"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-muted)'
      }
    }, "Dana Whitlock \xB7 GC"))), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      block: true,
      onClick: () => go('messages'),
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "message-square",
        size: 14
      })
    }, "Message"))), /*#__PURE__*/React.createElement(Dialog, {
      open: open,
      eyebrow: "Escrow",
      title: "Request release of \xA3420?",
      onClose: () => setOpen(false),
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: () => setOpen(false)
      }, "Not yet"), /*#__PURE__*/React.createElement(Button, {
        variant: "accent",
        disabled: !agree,
        onClick: () => {
          setOpen(false);
          setReleased(true);
        }
      }, "Request release"))
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("p", null, "Northlane Studio has 3 working days to raise an issue. After that, funds release automatically."), /*#__PURE__*/React.createElement(Field, {
      label: "Delivery note",
      htmlFor: "dn"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "dn",
      defaultValue: "Mark-up + risk note delivered 08 Sep"
    })), /*#__PURE__*/React.createElement(Checkbox, {
      checked: agree,
      onChange: () => setAgree(!agree),
      label: "The deliverable is complete and matches clause 4"
    }))), released && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        right: 24,
        bottom: 24,
        zIndex: 80
      }
    }, /*#__PURE__*/React.createElement(Toast, {
      tone: "success",
      title: "Release requested",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "check-circle"
      }),
      onDismiss: () => setReleased(true)
    }, "We've notified Dana. You'll be paid on approval.")));
  }
  Object.assign(window, {
    ContractDetail
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ContractDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Dashboard.jsx
try { (() => {
(function () {
  const {
    Card,
    StatTile,
    Badge,
    Button,
    Icon,
    GigCard,
    Stepper,
    Tabs,
    Avatar
  } = window.KontrakDesignSystem_5cbea0;
  function Dashboard({
    go
  }) {
    const [tab, setTab] = React.useState('active');
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '28px 32px 48px',
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(StatTile, {
      label: "In escrow",
      value: "\xA31,240",
      delta: "+\xA3480 this week"
    }), /*#__PURE__*/React.createElement(StatTile, {
      label: "Paid out (2026)",
      value: "\xA38,610"
    }), /*#__PURE__*/React.createElement(StatTile, {
      label: "Hours logged",
      value: "126"
    }), /*#__PURE__*/React.createElement(StatTile, {
      tone: "navy",
      label: "Open bids",
      value: "3",
      delta: "1 awaiting reply"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr',
        gap: 20,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: "none"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '22px 24px 0'
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      value: tab,
      onChange: setTab,
      items: [{
        value: 'active',
        label: 'Active work',
        count: 2
      }, {
        value: 'bids',
        label: 'My bids',
        count: 3
      }, {
        value: 'done',
        label: 'Completed',
        count: 11
      }]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, [{
      title: 'Review a SaaS reseller agreement',
      client: 'Northlane Studio',
      step: 2,
      fee: '£420',
      due: 'Due 12 Sep',
      badge: ['Escrow funded', 'success']
    }, {
      title: 'Draft an NDA pack for a seed round',
      client: 'Ferrow Legal',
      step: 1,
      fee: '£38 / h',
      due: 'Due 20 Sep',
      badge: ['Awaiting signature', 'warning']
    }].map(w => /*#__PURE__*/React.createElement("div", {
      key: w.title,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        paddingBottom: 18,
        borderBottom: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 16,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: w.client,
      verified: true
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 'var(--fs-md)',
        color: 'var(--text-strong)'
      }
    }, w.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-muted)',
        marginTop: 3
      }
    }, w.client, " \xB7 ", w.due))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: w.badge[1],
      dot: true
    }, w.badge[0]), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--fs-md)',
        color: 'var(--text-strong)'
      }
    }, w.fee))), /*#__PURE__*/React.createElement(Stepper, {
      steps: ['Scope', 'Bid accepted', 'Contract signed', 'Escrow released'],
      current: w.step
    }))), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      style: {
        alignSelf: 'flex-start'
      },
      onClick: () => go('contracts'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 14
      })
    }, "Open contracts"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-label"
    }, "Matched for you"), /*#__PURE__*/React.createElement("a", {
      onClick: () => go('briefs'),
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        cursor: 'pointer'
      }
    }, "See all")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(GigCard, {
      title: "Research memo: data transfers",
      client: "Halden & Co",
      rate: "\xA3560",
      period: "fixed",
      tags: ['Privacy'],
      badge: "Visa-safe",
      posted: "2h ago",
      onClick: () => go('briefs'),
      style: {
        boxShadow: 'none',
        border: '1px solid var(--border-subtle)'
      }
    }), /*#__PURE__*/React.createElement(GigCard, {
      title: "Trademark filing support",
      client: "Studio Mor",
      rate: "\xA3300",
      period: "fixed",
      tags: ['IP'],
      posted: "Today",
      onClick: () => go('briefs'),
      style: {
        boxShadow: 'none',
        border: '1px solid var(--border-subtle)'
      }
    }))), /*#__PURE__*/React.createElement(Card, {
      tone: "accent",
      padding: "sm"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 18,
      color: "var(--gold-700)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        lineHeight: 1.55
      }
    }, "7.5 hours left this week. Bids over that limit are blocked automatically."))))));
  }
  Object.assign(window, {
    Dashboard
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Messages.jsx
try { (() => {
(function () {
  const {
    Card,
    Avatar,
    Input,
    Button,
    Icon,
    Badge,
    IconButton
  } = window.KontrakDesignSystem_5cbea0;
  const THREADS = [{
    id: 1,
    name: 'Dana Whitlock',
    org: 'Northlane Studio',
    last: 'Perfect — the risk note is exactly what we needed.',
    time: '10:24',
    unread: true
  }, {
    id: 2,
    name: 'Priya Nandra',
    org: 'Ferrow Legal',
    last: 'Can you start the NDA pack Monday?',
    time: 'Yesterday'
  }, {
    id: 3,
    name: 'Tom Halden',
    org: 'Halden & Co',
    last: 'Sending the source documents shortly.',
    time: '2 Sep'
  }];
  const MSGS = [{
    me: false,
    t: 'Morning Aisha — did the reseller mark-up land okay?',
    at: '09:58'
  }, {
    me: true,
    t: 'Yes, uploaded to the contract page along with the one-page risk note. Two clauses I flagged as materially off-market: 7.2 (uncapped indemnity) and 11.4 (auto-renew without notice).',
    at: '10:11'
  }, {
    me: false,
    t: 'Perfect — the risk note is exactly what we needed. Approving the escrow release now.',
    at: '10:24'
  }];
  function Messages() {
    const [active, setActive] = React.useState(1);
    const [draft, setDraft] = React.useState('');
    const [msgs, setMsgs] = React.useState(MSGS);
    const send = () => {
      if (!draft.trim()) return;
      setMsgs([...msgs, {
        me: true,
        t: draft,
        at: 'now'
      }]);
      setDraft('');
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '24px 32px 32px',
        display: 'flex',
        gap: 20,
        height: 'calc(100vh - 122px)'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: "none",
      style: {
        width: 288,
        flexShrink: 0,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px 18px',
        borderBottom: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      size: "sm",
      placeholder: "Search messages\u2026",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "search",
        size: 14
      })
    })), THREADS.map(t => /*#__PURE__*/React.createElement("div", {
      key: t.id,
      onClick: () => setActive(t.id),
      style: {
        display: 'flex',
        gap: 11,
        padding: '14px 18px',
        cursor: 'pointer',
        borderBottom: '1px solid var(--border-hairline)',
        background: active === t.id ? 'var(--surface-hover)' : 'transparent',
        borderLeft: '2px solid ' + (active === t.id ? 'var(--gold-600)' : 'transparent')
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: t.name,
      size: "sm"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 'var(--fs-base)',
        color: 'var(--text-strong)'
      }
    }, t.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-xs)',
        color: 'var(--text-faint)'
      }
    }, t.time)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-muted)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        marginTop: 3
      }
    }, t.last))))), /*#__PURE__*/React.createElement(Card, {
      padding: "none",
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px 22px',
        borderBottom: '1px solid var(--border-hairline)',
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Dana Whitlock",
      verified: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 'var(--fs-md)',
        color: 'var(--text-strong)'
      }
    }, "Dana Whitlock"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-muted)'
      }
    }, "Northlane Studio \xB7 GC")), /*#__PURE__*/React.createElement(Badge, {
      tone: "navy"
    }, "KTK-2026-0413"), /*#__PURE__*/React.createElement(IconButton, {
      label: "Contract details",
      variant: "outline"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "file-signature"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '22px',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        background: 'var(--warm-white)'
      }
    }, msgs.map((m, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        alignSelf: m.me ? 'flex-end' : 'flex-start',
        maxWidth: '62%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 16px',
        borderRadius: 'var(--radius-md)',
        background: m.me ? 'var(--navy-900)' : 'var(--surface-card)',
        color: m.me ? '#fff' : 'var(--text-body)',
        border: m.me ? 'none' : '1px solid var(--border-subtle)',
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-base)',
        lineHeight: 1.6
      }
    }, m.t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-xs)',
        color: 'var(--text-faint)',
        marginTop: 5,
        textAlign: m.me ? 'right' : 'left'
      }
    }, m.at)))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 16,
        borderTop: '1px solid var(--border-hairline)',
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Input, {
      value: draft,
      onChange: e => setDraft(e.target.value),
      onKeyDown: e => e.key === 'Enter' && send(),
      placeholder: "Write a message\u2026"
    }), /*#__PURE__*/React.createElement(Button, {
      onClick: send,
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "send",
        size: 15
      })
    }, "Send"))));
  }
  Object.assign(window, {
    Messages
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Messages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Shell.jsx
try { (() => {
(function () {
  const {
    Logo,
    Icon,
    Avatar,
    IconButton,
    Badge,
    Tooltip
  } = window.KontrakDesignSystem_5cbea0;
  const NAV = [['dashboard', 'layout-dashboard', 'Dashboard'], ['briefs', 'search', 'Find briefs'], ['contracts', 'file-signature', 'Contracts'], ['messages', 'message-square', 'Messages'], ['payments', 'wallet', 'Payments']];
  function Sidebar({
    route,
    go
  }) {
    return /*#__PURE__*/React.createElement("aside", {
      style: {
        width: 236,
        flexShrink: 0,
        background: 'var(--navy-900)',
        display: 'flex',
        flexDirection: 'column',
        padding: '22px 14px',
        gap: 26
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 8px'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      tone: "onNavy",
      size: 34,
      tagline: false
    })), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, NAV.map(([id, ic, label]) => {
      const on = route === id;
      return /*#__PURE__*/React.createElement("a", {
        key: id,
        onClick: () => go(id),
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 11,
          padding: '10px 12px',
          borderRadius: 'var(--radius-md)',
          cursor: 'pointer',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--fs-base)',
          background: on ? 'rgba(255,255,255,0.09)' : 'transparent',
          color: on ? '#fff' : 'rgba(255,255,255,0.6)',
          transition: 'var(--transition-ui)'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: ic,
        size: 17,
        color: on ? 'var(--gold-400)' : 'rgba(255,255,255,0.55)'
      }), label, id === 'messages' && /*#__PURE__*/React.createElement("span", {
        style: {
          marginLeft: 'auto',
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: 'var(--gold-500)'
        }
      }));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'auto',
        padding: 16,
        borderRadius: 'var(--radius-md)',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid var(--border-inverse)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-micro)',
        letterSpacing: 'var(--ls-label-xs)',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.4)',
        marginBottom: 10
      }
    }, "Visa hours \xB7 this week"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: '#fff',
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("span", null, "12.5 h"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'rgba(255,255,255,0.45)'
      }
    }, "of 20 h")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 5,
        borderRadius: 3,
        background: 'rgba(255,255,255,0.12)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '62%',
        height: '100%',
        background: 'var(--gold-500)'
      }
    }))));
  }
  function TopBar({
    title,
    eyebrow,
    actions
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 24,
        padding: '28px 32px 22px',
        borderBottom: '1px solid var(--border-subtle)',
        background: 'var(--warm-white)'
      }
    }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 10
      }
    }, eyebrow), /*#__PURE__*/React.createElement("h1", {
      style: {
        font: '300 32px/1.15 var(--font-serif)',
        color: 'var(--text-strong)'
      }
    }, title)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, actions, /*#__PURE__*/React.createElement(Tooltip, {
      label: "Notifications"
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Notifications",
      variant: "outline"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bell"
    }))), /*#__PURE__*/React.createElement(Avatar, {
      name: "Aisha Rahman",
      verified: true
    })));
  }
  Object.assign(window, {
    Sidebar,
    TopBar
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BrowseWork.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(function () {
  const {
    Button,
    Card,
    Input,
    Select,
    Tag,
    Tabs,
    Switch,
    Icon,
    GigCard,
    Badge
  } = window.KontrakDesignSystem_5cbea0;
  const BRIEFS = [{
    title: 'Review a SaaS reseller agreement',
    client: 'Aurelis Studio',
    location: 'Remote · Berlin',
    rate: '€480',
    period: 'fixed',
    tags: ['SaaS & IT', 'Contract review'],
    badge: 'Day-cap safe',
    rating: 4.9,
    reviews: 22
  }, {
    title: 'DPA and SCC pack for a cloud migration',
    client: 'Ferrow Rechtsanwälte',
    location: 'München',
    rate: '€34',
    period: 'hour',
    tags: ['Data protection', 'Drafting'],
    rating: 4.7,
    reviews: 14
  }, {
    title: 'AI Act risk-classification memo for a scoring model',
    client: 'Halden & Co',
    location: 'Remote · EU',
    rate: '€620',
    period: 'fixed',
    tags: ['AI & regulation', 'Research'],
    badge: 'Day-cap safe',
    rating: 5.0,
    reviews: 9
  }, {
    title: 'Open-source licence audit for a Series A data room',
    client: 'Nordwind Ventures',
    location: 'Hamburg',
    rate: '€26',
    period: 'hour',
    tags: ['IP & licensing', 'Due diligence'],
    rating: 4.4,
    reviews: 31
  }, {
    title: 'Trademark filing support — 6 Nizza classes, fintech brand',
    client: 'Studio Mor',
    location: 'Remote · Köln',
    rate: '€340',
    period: 'fixed',
    tags: ['IP & licensing', 'Filings'],
    rating: 4.8,
    reviews: 6
  }, {
    title: 'Werkstudent: SaaS contract templates for a Series A',
    client: 'Kelvin Analytics GmbH',
    location: 'Leipzig',
    rate: '€29',
    period: 'hour',
    tags: ['Corporate', 'Drafting'],
    badge: 'Day-cap safe',
    rating: 4.6,
    reviews: 12
  }, {
    title: 'BaFin outsourcing clauses for a payments integration',
    client: 'Selfa Pay GmbH',
    location: 'Frankfurt',
    rate: '€520',
    period: 'fixed',
    tags: ['Fintech', 'Regulatory'],
    rating: 4.9,
    reviews: 17
  }, {
    title: 'Market-definition note for a merger filing',
    client: 'Ostwald Economics',
    location: 'Remote · Berlin',
    rate: '€31',
    period: 'hour',
    tags: ['Competition', 'Economics'],
    badge: 'Day-cap safe',
    rating: 4.8,
    reviews: 11
  }];
  function BrowseWork({
    go
  }) {
    const [tab, setTab] = React.useState('open');
    const [areas, setAreas] = React.useState(['SaaS & IT']);
    const [visaOnly, setVisaOnly] = React.useState(false);
    const toggle = a => setAreas(areas.includes(a) ? areas.filter(x => x !== a) : [...areas, a]);
    const list = visaOnly ? BRIEFS.filter(b => b.badge) : BRIEFS;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto',
        padding: '48px 40px 88px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-eyebrow",
      style: {
        marginBottom: 12
      }
    }, "Open briefs"), /*#__PURE__*/React.createElement("h1", {
      style: {
        font: '300 44px/1.15 var(--font-serif)',
        color: 'var(--text-strong)',
        marginBottom: 32
      }
    }, "Find contract work"), /*#__PURE__*/React.createElement(Card, {
      padding: "sm",
      style: {
        marginBottom: 28,
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr auto',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "Search briefs, clients, practice areas\u2026",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "search",
        size: 15
      })
    }), /*#__PURE__*/React.createElement(Select, {
      placeholder: "All jurisdictions",
      options: ['Germany', 'Austria', 'Switzerland', 'EU-wide']
    }), /*#__PURE__*/React.createElement(Select, {
      placeholder: "Any fee type",
      options: ['Fixed fee', 'Hourly', 'Retainer']
    }), /*#__PURE__*/React.createElement(Button, null, "Search")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, ['SaaS & IT', 'Data protection', 'AI & regulation', 'IP & licensing', 'Fintech', 'Corporate', 'Competition', 'Economics'].map(a => /*#__PURE__*/React.createElement(Tag, {
      key: a,
      selected: areas.includes(a),
      onClick: () => toggle(a)
    }, a)), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Switch, {
      checked: visaOnly,
      onChange: setVisaOnly,
      label: "Fits my remaining days"
    }))), /*#__PURE__*/React.createElement(Tabs, {
      value: tab,
      onChange: setTab,
      style: {
        marginBottom: 24
      },
      items: [{
        value: 'open',
        label: 'All open',
        count: list.length
      }, {
        value: 'new',
        label: 'Posted today',
        count: 2
      }, {
        value: 'saved',
        label: 'Saved',
        count: 4
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16
      }
    }, list.map(b => /*#__PURE__*/React.createElement(GigCard, _extends({
      key: b.title
    }, b, {
      onClick: () => go('gig')
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 36
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary"
    }, "Load 26 more briefs")));
  }
  Object.assign(window, {
    BrowseWork
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BrowseWork.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
(function () {
  const {
    Logo,
    Button,
    Icon
  } = window.KontrakDesignSystem_5cbea0;
  function SiteHeader({
    route,
    go
  }) {
    const links = [['work', 'Find work'], ['clients', 'For clients'], ['visa', 'Visa & rules'], ['pricing', 'Pricing']];
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 30,
        background: 'rgba(247,245,240,0.88)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto',
        padding: '0 40px',
        height: 76,
        display: 'flex',
        alignItems: 'center',
        gap: 40
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        cursor: 'pointer'
      },
      onClick: () => go('home')
    }, /*#__PURE__*/React.createElement(Logo, {
      size: 38,
      tagline: false
    })), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        gap: 28,
        flex: 1
      }
    }, links.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
      key: id,
      onClick: () => go(id),
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-base)',
        cursor: 'pointer',
        color: route === id ? 'var(--text-strong)' : 'var(--text-muted)'
      }
    }, label))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: () => go('signup')
    }, "Log in"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      onClick: () => go('signup')
    }, "Join as a student"))));
  }
  function SiteFooter({
    go = () => {}
  }) {
    const cols = [['For students', [['Find work', 'work'], ['Visa & hour rules', 'visa'], ['Get verified', 'signup'], ['Rates guide', 'visa']]], ['For clients', [['Post a brief', 'clients'], ['How vetting works', 'clients'], ['Pricing', 'pricing'], ['Escrow & payments', 'pricing']]], ['Company', [['About', 'home'], ['Careers', 'home'], ['Press', 'home'], ['Contact', 'home']]]];
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: 'var(--navy-900)',
        color: 'var(--text-on-navy)',
        padding: '64px 40px 40px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
        gap: 40
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      tone: "onNavy",
      size: 40
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-base)',
        lineHeight: 1.65,
        color: 'var(--text-on-navy-muted)',
        maxWidth: '30ch'
      }
    }, "Legal freelancing built around international students in Germany \u2014 scoped, signed and paid in one place.")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
      key: h,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-micro)',
        letterSpacing: 'var(--ls-label-sm)',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.38)'
      }
    }, h), items.map(([label, r]) => /*#__PURE__*/React.createElement("a", {
      key: label,
      onClick: () => go(r),
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-base)',
        color: 'var(--text-on-navy-muted)',
        cursor: 'pointer'
      }
    }, label))))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--maxw-content)',
        margin: '48px auto 0',
        paddingTop: 24,
        borderTop: '1px solid var(--border-inverse)',
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'rgba(255,255,255,0.38)'
      }
    }, "\xA9 2026 Kontrak Ltd."), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-micro)',
        letterSpacing: 'var(--ls-label-sm)',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.28)'
      }
    }, "Work Legal \xB7 Work Smart")));
  }
  Object.assign(window, {
    SiteHeader,
    SiteFooter
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ForClients.jsx
try { (() => {
(function () {
  const {
    Button,
    Card,
    Badge,
    Icon,
    StatTile,
    Stepper,
    Avatar,
    Rating,
    Tag,
    Field,
    Input,
    Select,
    Textarea
  } = window.KontrakDesignSystem_5cbea0;
  const TALENT = [{
    name: 'Aisha Rahman',
    uni: 'Humboldt-Universität zu Berlin',
    area: ['Commercial', 'Privacy'],
    rate: '€34 / h',
    rating: 4.9,
    reviews: 22
  }, {
    name: 'Jonas Weber',
    uni: 'LMU München',
    area: ['Corporate', 'M&A support'],
    rate: '€38 / h',
    rating: 4.8,
    reviews: 16
  }, {
    name: 'Priya Nandra',
    uni: 'Universität Hamburg',
    area: ['Employment'],
    rate: '€29 / h',
    rating: 5.0,
    reviews: 9
  }];
  function ForClients({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--navy-900)',
        color: '#fff',
        padding: '80px 40px 72px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: 56,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-tiny)',
        letterSpacing: 'var(--ls-eyebrow)',
        textTransform: 'uppercase',
        color: 'var(--gold-400)',
        marginBottom: 18
      }
    }, "For clients"), /*#__PURE__*/React.createElement("h1", {
      style: {
        font: '300 52px/1.1 var(--font-serif)',
        color: '#fff',
        marginBottom: 20
      }
    }, "Overflow legal work,", /*#__PURE__*/React.createElement("br", null), "compliantly staffed"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-lg)',
        lineHeight: 1.6,
        color: 'var(--text-on-navy-muted)',
        maxWidth: '46ch',
        marginBottom: 30
      }
    }, "Post a brief and receive scoped bids from verified law students at German universities. We check enrolment, permit wording and hour caps before anyone can bid on your work."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      onClick: () => go('signup'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 17
      })
    }, "Post a brief"), /*#__PURE__*/React.createElement(Button, {
      variant: "onNavy",
      size: "lg",
      onClick: () => go('pricing')
    }, "See pricing"))), /*#__PURE__*/React.createElement(Card, {
      padding: "md"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 16
      }
    }, "Post a brief \xB7 example"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Title",
      htmlFor: "t"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "t",
      defaultValue: "Review a SaaS reseller agreement"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Fee",
      htmlFor: "f"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "f",
      defaultValue: "\u20AC480"
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Scoped hours",
      htmlFor: "h",
      hint: "\u20AC34 / h effective"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "h",
      defaultValue: "14"
    }))), /*#__PURE__*/React.createElement(Field, {
      label: "Jurisdiction",
      htmlFor: "j"
    }, /*#__PURE__*/React.createElement(Select, {
      id: "j",
      options: ['Germany', 'Austria', 'Switzerland', 'EU-wide']
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      block: true,
      onClick: () => go('signup')
    }, "Publish to 2,400 students"))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '48px 40px',
        background: 'var(--parchment)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(StatTile, {
      label: "Median first bid",
      value: "6 h",
      delta: "after publishing"
    }), /*#__PURE__*/React.createElement(StatTile, {
      label: "Avg. brief value",
      value: "\u20AC410"
    }), /*#__PURE__*/React.createElement(StatTile, {
      label: "Verified students",
      value: "2,400+"
    }), /*#__PURE__*/React.createElement(StatTile, {
      label: "Compliance escalations",
      value: "0",
      delta: "Hour caps enforced"
    }))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '80px 40px',
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-eyebrow",
      style: {
        marginBottom: 14
      }
    }, "How hiring works"), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: '300 38px/1.15 var(--font-serif)',
        color: 'var(--text-strong)',
        marginBottom: 40,
        maxWidth: '24ch'
      }
    }, "Four steps, one invoice"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 20
      }
    }, [['file-text', 'Post the brief', 'Scope, fee, deadline, jurisdiction. Fixed fee or hourly.'], ['users', 'Review bids', 'Each bid carries the student\'s university, practice areas, rate and remaining permitted hours.'], ['file-signature', 'Sign', 'We generate the engagement letter under German law. Both sides sign in-app.'], ['wallet', 'Fund escrow', 'Fees sit in escrow and release on your sign-off. One monthly invoice with VAT.']].map(([ic, t, d], i) => /*#__PURE__*/React.createElement(Card, {
      key: t,
      tone: "outline",
      padding: "sm",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 22,
      color: "var(--navy-700)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--fs-2xl)',
        color: 'var(--gold-200)'
      }
    }, "0", i + 1)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 'var(--fs-md)',
        color: 'var(--text-strong)'
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-base)',
        lineHeight: 1.6,
        color: 'var(--text-muted)'
      }
    }, d))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 40px 80px',
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 20,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 16
      }
    }, "Verification we run"), [['badge-check', 'Enrolment confirmed with the university registrar'], ['shield-check', 'Residence permit wording read and recorded'], ['clock', 'Remaining day-account balance checked before every bid'], ['scale', 'Practice-area references from prior engagements']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
        padding: '13px 0',
        borderTop: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 18,
      color: "var(--navy-500)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-base)',
        lineHeight: 1.55,
        color: 'var(--text-body)'
      }
    }, t)))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-label"
    }, "Students bidding this week"), /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Example data")), TALENT.map(t => /*#__PURE__*/React.createElement("div", {
      key: t.name,
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        padding: '14px 0',
        borderTop: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: t.name,
      verified: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 'var(--fs-base)',
        color: 'var(--text-strong)'
      }
    }, t.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-muted)'
      }
    }, t.uni), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 5,
        marginTop: 7
      }
    }, t.area.map(a => /*#__PURE__*/React.createElement(Tag, {
      key: a
    }, a)))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--fs-md)',
        color: 'var(--text-strong)'
      }
    }, t.rate), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement(Rating, {
      value: t.rating,
      count: t.reviews,
      size: 11
    })))))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 40px 96px',
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      tone: "navy",
      padding: "lg",
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 40
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        font: '300 30px/1.25 var(--font-serif)',
        color: '#fff',
        marginBottom: 12
      }
    }, "Your first brief is free to post"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-md)',
        color: 'var(--text-on-navy-muted)',
        maxWidth: '52ch'
      }
    }, "No listing fee, no subscription. We take a platform fee on completed engagements only.")), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      onClick: () => go('signup')
    }, "Post a brief"))));
  }
  Object.assign(window, {
    ForClients
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ForClients.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/GigDetail.jsx
try { (() => {
(function () {
  const {
    Button,
    Card,
    Badge,
    Tag,
    Avatar,
    Rating,
    Icon,
    Field,
    Input,
    Textarea,
    Stepper,
    Dialog,
    Toast
  } = window.KontrakDesignSystem_5cbea0;
  function GigDetail({
    go
  }) {
    const [open, setOpen] = React.useState(false);
    const [sent, setSent] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto',
        padding: '40px 40px 88px'
      }
    }, /*#__PURE__*/React.createElement("a", {
      onClick: () => go('work'),
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-muted)',
        cursor: 'pointer',
        display: 'inline-flex',
        gap: 6,
        alignItems: 'center',
        marginBottom: 24
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 14
    }), " All briefs"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.6fr 0.9fr',
        gap: 32,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 20,
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 12
      }
    }, "Commercial \xB7 Contract review"), /*#__PURE__*/React.createElement("h1", {
      style: {
        font: '300 34px/1.2 var(--font-serif)',
        color: 'var(--text-strong)',
        marginBottom: 12
      }
    }, "Review a SaaS reseller agreement"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "gold"
    }, "Day-cap safe"), /*#__PURE__*/React.createElement(Badge, {
      tone: "navy",
      dot: true
    }, "Escrow ready"))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--fs-4xl)',
        color: 'var(--text-strong)',
        lineHeight: 1
      }
    }, "\u20AC480"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-muted)',
        marginTop: 6
      }
    }, "fixed fee \xB7 14 h scope \xB7 \u20AC34.29 / h"))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: 'var(--border-hairline)',
        margin: '0 0 20px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-md)',
        lineHeight: 1.7,
        color: 'var(--text-body)',
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("p", null, "We're signing our first reseller in the Nordics and need a second pair of eyes on the agreement before it goes back to their counsel."), /*#__PURE__*/React.createElement("p", null, "Deliverable is a marked-up copy plus a one-page risk note. Our Syndikusanw\xE4ltin will walk you through the commercial context on a 30-minute call.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 16,
        marginTop: 28
      }
    }, [['calendar', 'Deadline', '12 Sep 2026'], ['globe', 'Jurisdiction', 'Germany · BGB / HGB'], ['clock', 'Scoped hours', '14 h · 2 full days']].map(([ic, l, v]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 17,
      color: "var(--navy-500)"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 4
      }
    }, l), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-base)',
        color: 'var(--text-strong)'
      }
    }, v)))))), /*#__PURE__*/React.createElement(Card, {
      tone: "outline"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 16
      }
    }, "What happens after you bid"), /*#__PURE__*/React.createElement(Stepper, {
      steps: ['Bid sent', 'Client review', 'Contract signed', 'Escrow funded'],
      current: 0
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        position: 'sticky',
        top: 100
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Aurelis Studio",
      size: "lg",
      verified: true
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 'var(--fs-md)',
        color: 'var(--text-strong)'
      }
    }, "Aurelis Studio"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-muted)'
      }
    }, "Remote \xB7 Berlin \xB7 14 briefs posted"))), /*#__PURE__*/React.createElement(Rating, {
      value: 4.9,
      count: 22
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: 'var(--border-hairline)',
        margin: '18px 0'
      }
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      block: true,
      size: "lg",
      onClick: () => setOpen(true)
    }, "Send a bid"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      block: true,
      style: {
        marginTop: 8
      },
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "bookmark",
        size: 15
      })
    }, "Save brief")), /*#__PURE__*/React.createElement(Card, {
      tone: "accent",
      padding: "sm"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 18,
      color: "var(--gold-700)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        lineHeight: 1.55,
        color: 'var(--text-body)'
      }
    }, "Fits your remaining ", /*#__PURE__*/React.createElement("strong", null, "7.5 hours"), " this week and ", /*#__PURE__*/React.createElement("strong", null, "54 full days"), " this year."))))), /*#__PURE__*/React.createElement(Dialog, {
      open: open,
      eyebrow: "Your bid",
      title: "Bid on this brief",
      width: 520,
      onClose: () => setOpen(false),
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: () => setOpen(false)
      }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
        variant: "accent",
        onClick: () => {
          setOpen(false);
          setSent(true);
        }
      }, "Send bid"))
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Your fee",
      htmlFor: "fee"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "fee",
      defaultValue: "\u20AC480"
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Hours you'll bill",
      htmlFor: "hrs",
      hint: "7.5 h left this week \xB7 floor \u20AC13.90/h"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "hrs",
      defaultValue: "14"
    }))), /*#__PURE__*/React.createElement(Field, {
      label: "Scope note",
      htmlFor: "sc"
    }, /*#__PURE__*/React.createElement(Textarea, {
      id: "sc",
      rows: 3,
      placeholder: "How you'd approach the mark-up\u2026"
    })))), sent && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        right: 24,
        bottom: 24,
        zIndex: 80
      }
    }, /*#__PURE__*/React.createElement(Toast, {
      tone: "success",
      title: "Bid sent",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "check-circle"
      }),
      onDismiss: () => setSent(false)
    }, "Aurelis Studio usually replies within a day.")));
  }
  Object.assign(window, {
    GigDetail
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/GigDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
(function () {
  const {
    Button,
    Card,
    Badge,
    Icon,
    StatTile,
    GigCard,
    Tag
  } = window.KontrakDesignSystem_5cbea0;

  /* Reveals a block once, on first scroll into view. Fade + 14px rise, nothing else. */
  function Reveal({
    children,
    delay = 0,
    style
  }) {
    const ref = React.useRef(null);
    const [seen, setSeen] = React.useState(false);
    React.useEffect(() => {
      const el = ref.current;
      if (!el || seen) return;
      const io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      }, {
        rootMargin: '-8% 0px -12%'
      });
      io.observe(el);
      return () => io.disconnect();
    }, [seen]);
    return /*#__PURE__*/React.createElement("div", {
      ref: ref,
      className: 'k-reveal' + (seen ? ' in' : ''),
      style: {
        animationDelay: delay + 'ms',
        ...style
      }
    }, children);
  }

  /* Counts a figure up once it is in view. Prefix/suffix keep the brand's formatting. */
  function Figure({
    to,
    prefix = '',
    suffix = '',
    decimals = 0,
    duration = 1100
  }) {
    const ref = React.useRef(null);
    const [v, setV] = React.useState(0);
    React.useEffect(() => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setV(to);
        return;
      }
      const io = new IntersectionObserver(([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = t => {
          const p = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setV(to * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }, {
        rootMargin: '-10% 0px'
      });
      io.observe(el);
      return () => io.disconnect();
    }, [to, duration]);
    const shown = decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString('en-GB');
    return /*#__PURE__*/React.createElement("span", {
      ref: ref
    }, prefix, shown, suffix);
  }
  function Home({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--navy-900)',
        color: '#fff',
        padding: '96px 40px 88px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.15fr 0.85fr',
        gap: 64,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "k-enter",
      style: {
        animationDelay: '40ms',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-tiny)',
        letterSpacing: 'var(--ls-eyebrow)',
        textTransform: 'uppercase',
        color: 'var(--gold-400)',
        marginBottom: 16
      }
    }, "Legal freelancing for international students \xB7 Germany"), /*#__PURE__*/React.createElement("div", {
      className: "k-rule",
      style: {
        animationDelay: '220ms',
        width: 64,
        height: 1.5,
        background: 'var(--gold-500)',
        marginBottom: 24
      }
    }), /*#__PURE__*/React.createElement("h1", {
      style: {
        font: '300 64px/1.08 var(--font-serif)',
        color: '#fff',
        letterSpacing: '-0.01em',
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-enter",
      style: {
        animationDelay: '120ms',
        display: 'block'
      }
    }, "Paid legal work"), /*#__PURE__*/React.createElement("span", {
      className: "k-enter",
      style: {
        animationDelay: '240ms',
        display: 'block'
      }
    }, "that fits your visa")), /*#__PURE__*/React.createElement("p", {
      className: "k-enter",
      style: {
        animationDelay: '340ms',
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-lg)',
        lineHeight: 1.6,
        color: 'var(--text-on-navy-muted)',
        maxWidth: '46ch',
        marginBottom: 32
      }
    }, "Kontrak matches law students at German universities with real contract work from vetted clients. Every brief is checked against your \xA716b day account, every fee sits in escrow, every engagement is a signed contract."), /*#__PURE__*/React.createElement("div", {
      className: "k-enter",
      style: {
        animationDelay: '440ms',
        display: 'flex',
        gap: 12,
        marginBottom: 36
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      onClick: () => go('signup'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 17
      })
    }, "Join as a student"), /*#__PURE__*/React.createElement(Button, {
      variant: "onNavy",
      size: "lg",
      onClick: () => go('work')
    }, "Browse open briefs")), /*#__PURE__*/React.createElement("div", {
      className: "k-enter",
      style: {
        animationDelay: '560ms',
        display: 'flex',
        gap: 22,
        alignItems: 'center'
      }
    }, [['shield-check', '140-day account tracked'], ['file-signature', 'Contract on every gig'], ['wallet', 'Escrow-held fees in EUR']].map(([ic, t]) => /*#__PURE__*/React.createElement("span", {
      key: t,
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'rgba(255,255,255,0.6)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 16,
      color: "var(--gold-400)"
    }), t)))), /*#__PURE__*/React.createElement(Card, {
      tone: "default",
      padding: "none",
      className: "k-fade",
      style: {
        animationDelay: '480ms',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '20px 24px',
        borderBottom: '1px solid var(--border-hairline)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-label"
    }, "Live briefs"), /*#__PURE__*/React.createElement("span", {
      className: "k-pulse"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      dot: true
    }, "34 open"))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        background: 'var(--warm-white)'
      }
    }, /*#__PURE__*/React.createElement(GigCard, {
      title: "Review a SaaS reseller agreement",
      client: "Aurelis Studio",
      location: "Remote \xB7 Berlin",
      rate: "\u20AC480",
      period: "fixed",
      tags: ['SaaS & IT'],
      badge: "Day-cap safe",
      posted: "Posted 2h ago",
      onClick: () => go('work')
    }), /*#__PURE__*/React.createElement(GigCard, {
      title: "DPA and SCC pack for a cloud migration",
      client: "Ferrow Rechtsanw\xE4lte",
      location: "M\xFCnchen",
      rate: "\u20AC34",
      period: "hour",
      tags: ['Data protection'],
      posted: "Posted today",
      onClick: () => go('work')
    }))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '56px 40px',
        background: 'var(--parchment)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 16
      }
    }, [{
      label: 'Students earning',
      node: /*#__PURE__*/React.createElement(Figure, {
        to: 2400,
        suffix: "+"
      })
    }, {
      label: 'Avg. fee per brief',
      node: /*#__PURE__*/React.createElement(Figure, {
        to: 410,
        prefix: "\u20AC"
      })
    }, {
      label: 'Paid through escrow',
      node: /*#__PURE__*/React.createElement(Figure, {
        to: 2.1,
        prefix: "\u20AC",
        suffix: "M",
        decimals: 1
      })
    }, {
      label: 'Visa breaches',
      node: /*#__PURE__*/React.createElement(Figure, {
        to: 0
      }),
      delta: 'Day caps enforced'
    }].map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: s.label,
      delay: i * 90
    }, /*#__PURE__*/React.createElement(StatTile, {
      label: s.label,
      value: s.node,
      delta: s.delta
    }))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '88px 40px',
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
      className: "k-eyebrow",
      style: {
        marginBottom: 14
      }
    }, "How it works"), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: '300 40px/1.15 var(--font-serif)',
        color: 'var(--text-strong)',
        marginBottom: 48,
        maxWidth: '22ch'
      }
    }, "Four steps from brief to bank transfer")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 20
      }
    }, [['search', 'Get matched', 'We surface briefs that match your practice area, jurisdiction and remaining §16b working days.'], ['gavel', 'Bid your terms', 'Send a scope, a fee and a timeline. No auctions, no race to the bottom.'], ['file-signature', 'Sign the contract', 'Kontrak generates the engagement letter under German law. Both sides sign in the app.'], ['wallet', 'Get paid', 'The client funds escrow before you start. Funds release on sign-off.']].map(([ic, t, d], i) => /*#__PURE__*/React.createElement(Reveal, {
      key: t,
      delay: i * 110
    }, /*#__PURE__*/React.createElement(Card, {
      tone: "outline",
      padding: "sm",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 22,
      color: "var(--navy-700)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--fs-2xl)',
        color: 'var(--gold-200)'
      }
    }, "0", i + 1)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 'var(--fs-md)',
        color: 'var(--text-strong)'
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-base)',
        lineHeight: 1.6,
        color: 'var(--text-muted)'
      }
    }, d)))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 40px 88px',
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Card, {
      tone: "navy",
      padding: "lg",
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 56,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-tiny)',
        letterSpacing: 'var(--ls-eyebrow)',
        textTransform: 'uppercase',
        color: 'var(--gold-400)',
        marginBottom: 16
      }
    }, "Built for German student permits"), /*#__PURE__*/React.createElement("h3", {
      style: {
        font: '300 32px/1.2 var(--font-serif)',
        color: '#fff',
        marginBottom: 16
      }
    }, "Your 140 days are a hard limit, not a warning"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-md)',
        lineHeight: 1.65,
        color: 'var(--text-on-navy-muted)',
        marginBottom: 24
      }
    }, "Non-EU students may work 140 full days or 280 half days per calendar year, and 20 hours a week in the lecture period. Kontrak blocks bids that would breach either limit, logs every billed hour against the contract, and keeps an exportable record for your Ausl\xE4nderbeh\xF6rde."), /*#__PURE__*/React.createElement(Button, {
      variant: "onNavy",
      size: "sm",
      style: {
        marginBottom: 20
      },
      onClick: () => go('visa'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 15
      })
    }, "Read the German rules"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, ['140 full days / year', '20 h/week in lecture period', '€13.90 statutory floor', 'Exportable hour log'].map(t => /*#__PURE__*/React.createElement("span", {
      key: t,
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        padding: '5px 12px',
        borderRadius: 'var(--radius-pill)',
        border: '1px solid var(--border-inverse)',
        color: 'rgba(255,255,255,0.8)'
      }
    }, t)))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid var(--border-inverse)',
        borderRadius: 'var(--radius-md)',
        padding: 28
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-micro-plus)',
        letterSpacing: 'var(--ls-label-xs)',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.45)'
      }
    }, "This week"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: '#fff'
      }
    }, "12.5 / 20 h")), /*#__PURE__*/React.createElement(Meter, null), [['Contract review · Aurelis', '6.0 h'], ['DPA pack · Ferrow Rechtsanwälte', '4.5 h'], ['Research memo · Halden & Co', '2.0 h']].map(([n, hh]) => /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 0',
        borderTop: '1px solid var(--border-inverse)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'rgba(255,255,255,0.72)'
      }
    }, n), /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#fff'
      }
    }, hh))))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 40px 96px',
        maxWidth: 'var(--maxw-narrow)',
        margin: '0 auto',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1.5,
        height: 52,
        background: 'var(--rule-fade)',
        margin: '0 auto 28px'
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '300 32px/1.35 var(--font-serif)',
        color: 'var(--text-strong)',
        marginBottom: 20
      }
    }, "\u201CI billed 180 hours in my second year without once guessing whether I was allowed to.\u201D"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-micro-plus)',
        letterSpacing: 'var(--ls-label-xs)',
        textTransform: 'uppercase',
        color: 'var(--text-faint)'
      }
    }, "Aisha R. \xB7 LLM candidate, Humboldt-Universit\xE4t zu Berlin \xB7 Kontrak since 2024"))));
  }

  /* Hour meter that fills once, when the band is reached. */
  function Meter() {
    const ref = React.useRef(null);
    const [w, setW] = React.useState(0);
    React.useEffect(() => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setW(62);
        return;
      }
      const io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
          setW(62);
          io.disconnect();
        }
      }, {
        rootMargin: '-10% 0px'
      });
      io.observe(el);
      return () => io.disconnect();
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      ref: ref,
      style: {
        height: 6,
        borderRadius: 3,
        background: 'rgba(255,255,255,0.12)',
        overflow: 'hidden',
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: w + '%',
        height: '100%',
        background: 'var(--gold-500)',
        transition: 'width 1100ms var(--ease-out)'
      }
    }));
  }
  Object.assign(window, {
    Home
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pricing.jsx
try { (() => {
(function () {
  const {
    Button,
    Card,
    Badge,
    Icon,
    Tabs,
    Tooltip
  } = window.KontrakDesignSystem_5cbea0;
  const PLANS = [{
    name: 'Student',
    price: 'Free',
    unit: '',
    line: 'You keep your fee. We take nothing from the student side.',
    items: ['Unlimited bids', 'Day-account tracking', 'Engagement letter generated', 'Escrow protection', 'Exportable hour log for your Ausländerbehörde'],
    cta: 'Join as a student',
    tone: 'default'
  }, {
    name: 'Client · Pay per brief',
    price: '8%',
    unit: 'of the engagement fee',
    line: 'Charged only when work completes. No listing fee.',
    items: ['Unlimited briefs', 'Verified students only', 'Escrow held in EUR', 'Engagement letter under German law', 'Monthly invoice with VAT'],
    cta: 'Post a brief',
    tone: 'accent',
    featured: true
  }, {
    name: 'Client · Chambers',
    price: '€490',
    unit: 'per month',
    line: 'For firms running continuous overflow work.',
    items: ['5% engagement fee', 'Named account manager', 'Framework agreement', 'Bulk hour reporting', 'SSO and shared billing'],
    cta: 'Talk to us',
    tone: 'default'
  }];
  const FEES = [['Engagement fee (pay per brief)', '8% of fee', 'Client'], ['Engagement fee (Chambers)', '5% of fee', 'Client'], ['Escrow handling', 'Included', '—'], ['SEPA payout', 'Included', '—'], ['Non-EUR payout', '1.2% FX', 'Student'], ['Dispute mediation', 'Included', '—']];
  function Pricing({
    go
  }) {
    const [cycle, setCycle] = React.useState('Monthly');
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '56px 40px 40px',
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-eyebrow",
      style: {
        marginBottom: 14
      }
    }, "Pricing"), /*#__PURE__*/React.createElement("h1", {
      style: {
        font: '300 46px/1.12 var(--font-serif)',
        color: 'var(--text-strong)',
        marginBottom: 16,
        maxWidth: '26ch'
      }
    }, "Students pay nothing. Clients pay on completion."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-lg)',
        lineHeight: 1.6,
        color: 'var(--text-muted)',
        maxWidth: '58ch',
        marginBottom: 24
      }
    }, "All figures in EUR, excluding VAT. Escrow is held with a licensed payment institution in the EEA."), /*#__PURE__*/React.createElement(Tabs, {
      variant: "segmented",
      value: cycle,
      onChange: setCycle,
      items: ['Monthly', 'Annual · 2 months free']
    })), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 40px 56px',
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 20,
        alignItems: 'stretch'
      }
    }, PLANS.map(p => /*#__PURE__*/React.createElement(Card, {
      key: p.name,
      tone: p.featured ? 'accent' : 'outline',
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-label"
    }, p.name), p.featured && /*#__PURE__*/React.createElement(Badge, {
      tone: "gold"
    }, "Most used")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--fs-5xl)',
        color: 'var(--text-strong)',
        lineHeight: 1
      }
    }, p.name === 'Client · Chambers' && cycle !== 'Monthly' ? '€408' : p.price), p.unit && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-muted)',
        marginLeft: 8
      }
    }, p.unit)), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-base)',
        lineHeight: 1.6,
        color: 'var(--text-muted)'
      }
    }, p.line), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: 'var(--border-hairline)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        flex: 1
      }
    }, p.items.map(i => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-base)',
        lineHeight: 1.5,
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 16,
      color: "var(--gold-700)",
      style: {
        marginTop: 2
      }
    }), i))), /*#__PURE__*/React.createElement(Button, {
      variant: p.featured ? 'accent' : 'secondary',
      block: true,
      onClick: () => go(p.name === 'Student' ? 'signup' : 'clients')
    }, p.cta))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 40px 56px',
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.3fr 1fr',
        gap: 20,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: "none",
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        background: 'var(--parchment)'
      }
    }, ['Fee', 'Amount', 'Paid by'].map(h => /*#__PURE__*/React.createElement("div", {
      key: h,
      style: {
        padding: '14px 20px',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-micro-plus)',
        letterSpacing: 'var(--ls-label-xs)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, h))), FEES.map(row => /*#__PURE__*/React.createElement("div", {
      key: row[0],
      style: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        borderTop: '1px solid var(--border-hairline)'
      }
    }, row.map((c, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: '16px 20px',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-base)',
        color: i === 0 ? 'var(--text-body)' : 'var(--text-muted)',
        fontWeight: i === 1 ? 500 : 300
      }
    }, c))))), /*#__PURE__*/React.createElement(Card, {
      tone: "navy"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-micro-plus)',
        letterSpacing: 'var(--ls-label-xs)',
        textTransform: 'uppercase',
        color: 'var(--text-on-navy-muted)',
        marginBottom: 16
      }
    }, "Worked example"), [['Brief fee', '€480'], ['Scoped hours', '14 h'], ['Effective rate', '€34.29 / h'], ['Statutory floor', '€13.90 / h'], ['Platform fee (8%)', '€38.40'], ['Student receives', '€480.00'], ['Client pays', '€518.40']].map(([l, v], i, arr) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '11px 0',
        borderTop: '1px solid var(--border-inverse)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'rgba(255,255,255,0.66)'
      }
    }, l), /*#__PURE__*/React.createElement("span", {
      style: {
        color: i >= arr.length - 2 ? 'var(--gold-400)' : '#fff',
        fontFamily: 'var(--font-display)',
        fontWeight: 600
      }
    }, v))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 40px 96px',
        maxWidth: 'var(--maxw-narrow)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-eyebrow",
      style: {
        marginBottom: 20
      }
    }, "Questions we get"), [['Do students ever pay a fee?', 'No. Bidding, contracts, escrow and the exportable hour log are free for students.'], ['When is the platform fee charged?', 'On release of escrow, against the completed engagement. Cancelled briefs cost nothing.'], ['What happens if a brief goes over its scoped hours?', 'The student cannot log hours past the scope without your written approval in-app, and never past their remaining day-account balance.'], ['Is VAT included?', 'No. German VAT at 19% is added on the platform fee and shown on your monthly invoice.']].map(([q, a]) => /*#__PURE__*/React.createElement("div", {
      key: q,
      style: {
        padding: '20px 0',
        borderTop: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 'var(--fs-md)',
        color: 'var(--text-strong)',
        marginBottom: 8
      }
    }, q), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-base)',
        lineHeight: 1.65,
        color: 'var(--text-muted)'
      }
    }, a)))));
  }
  Object.assign(window, {
    Pricing
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SignUp.jsx
try { (() => {
(function () {
  const {
    Button,
    Card,
    Logo,
    Field,
    Input,
    Select,
    Checkbox,
    Radio,
    Stepper,
    Icon
  } = window.KontrakDesignSystem_5cbea0;
  function SignUp({
    go
  }) {
    const [role, setRole] = React.useState('student');
    const [ok, setOk] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: 'calc(100vh - 76px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '72px 64px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: 560,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-eyebrow",
      style: {
        marginBottom: 14
      }
    }, "Create your account"), /*#__PURE__*/React.createElement("h1", {
      style: {
        font: '300 40px/1.15 var(--font-serif)',
        color: 'var(--text-strong)',
        marginBottom: 28
      }
    }, "Start billing legal hours"), /*#__PURE__*/React.createElement(Stepper, {
      steps: ['Account', 'Verify', 'Practice areas'],
      current: 0,
      style: {
        marginBottom: 32
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Card, {
      tone: role === 'student' ? 'accent' : 'outline',
      padding: "sm",
      interactive: true,
      onClick: () => setRole('student'),
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Radio, {
      checked: role === 'student',
      label: "I'm a student",
      description: "Bid on briefs, bill hours",
      onChange: () => setRole('student')
    })), /*#__PURE__*/React.createElement(Card, {
      tone: role === 'client' ? 'accent' : 'outline',
      padding: "sm",
      interactive: true,
      onClick: () => setRole('client'),
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Radio, {
      checked: role === 'client',
      label: "I'm hiring",
      description: "Post briefs, fund escrow",
      onChange: () => setRole('client')
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "First name",
      htmlFor: "f"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "f",
      placeholder: "Aisha"
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Last name",
      htmlFor: "l"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "l",
      placeholder: "Rahman"
    }))), /*#__PURE__*/React.createElement(Field, {
      label: "University email",
      htmlFor: "em",
      hint: "We verify enrolment with your institution."
    }, /*#__PURE__*/React.createElement(Input, {
      id: "em",
      placeholder: "a.rahman@hu-berlin.de"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Residence permit",
      htmlFor: "v"
    }, /*#__PURE__*/React.createElement(Select, {
      id: "v",
      placeholder: "Select",
      options: ['§16b student permit (non-EU)', 'EU / EEA citizen', '§16f language course', '§20 job-seeking permit']
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Work allowance",
      htmlFor: "h"
    }, /*#__PURE__*/React.createElement(Select, {
      id: "h",
      placeholder: "Select",
      options: ['140 full / 280 half days', '20 h per week (lecture period)', 'No restriction (EU/EEA)']
    }))), /*#__PURE__*/React.createElement(Checkbox, {
      checked: ok,
      onChange: () => setOk(!ok),
      label: "I confirm my permit allows paid employment",
      description: "Kontrak enforces your 140-day account and keeps an exportable hour log for your Ausl\xE4nderbeh\xF6rde."
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      disabled: !ok,
      onClick: () => go('work'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 17
      })
    }, "Continue to verification"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-muted)'
      }
    }, "Already on Kontrak? ", /*#__PURE__*/React.createElement("a", {
      onClick: () => go('work'),
      style: {
        cursor: 'pointer'
      }
    }, "Log in")))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--navy-900)',
        padding: '72px 64px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 32
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      tone: "onNavy",
      size: 52
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '300 30px/1.35 var(--font-serif)',
        color: '#fff',
        maxWidth: '26ch'
      }
    }, "Every engagement on Kontrak is a signed contract under German law, with the fee already in escrow."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, [['badge-check', 'Enrolment verified with your university'], ['shield-check', '§16b day account tracked automatically'], ['scale', 'No brief below the €13.90 statutory floor'], ['wallet', 'Fees released only on sign-off'], ['file-signature', 'Engagement letter generated for you']].map(([ic, t]) => /*#__PURE__*/React.createElement("span", {
      key: t,
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-md)',
        color: 'var(--text-on-navy-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 18,
      color: "var(--gold-400)"
    }), t)))));
  }
  Object.assign(window, {
    SignUp
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SignUp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/VisaRules.jsx
try { (() => {
(function () {
  const {
    Button,
    Card,
    Badge,
    Tag,
    Tabs,
    Icon,
    StatTile,
    Stepper,
    Tooltip
  } = window.KontrakDesignSystem_5cbea0;
  const MODELS = [{
    name: 'Minijob',
    hours: '≈ 43.4 h / month',
    ceiling: '€603 / month gross',
    tax: 'No income tax, flat employer levy',
    kontrak: 'Fee capped so your month stays under €603'
  }, {
    name: 'Werkstudent',
    hours: '20 h / week in lecture period',
    ceiling: '≈ €1,205 / month at €13.90',
    tax: 'Pension only (9.3%); no health, care or unemployment',
    kontrak: 'Weekly cap enforced before you can bid'
  }, {
    name: 'Fixed-fee brief',
    hours: 'Counts as full or half days',
    ceiling: '140 full / 280 half days per year',
    tax: 'Depends on your permit wording',
    kontrak: 'Effective hourly shown before you accept'
  }];
  const WAGE = [{
    year: '2025',
    rate: '€12.82',
    note: 'Previous statutory floor'
  }, {
    year: '2026',
    rate: '€13.90',
    note: 'In force since 1 January 2026',
    now: true
  }, {
    year: '2027',
    rate: '€14.60',
    note: 'Already legislated'
  }];
  const LOG = [{
    name: 'Contract review · Aurelis Studio',
    days: '8 full days',
    hours: '52 h'
  }, {
    name: 'NDA pack · Ferrow Rechtsanwälte',
    days: '6 half days',
    hours: '21 h'
  }, {
    name: 'Research memo · Halden & Co',
    days: '4 full days',
    hours: '27 h'
  }, {
    name: 'HiWi · Chair of Private Law',
    days: 'Exempt',
    hours: '64 h',
    exempt: true
  }];
  function VisaRules({
    go
  }) {
    const [model, setModel] = React.useState('Werkstudent');
    const [rate, setRate] = React.useState(32);
    const [hours, setHours] = React.useState(12);
    const monthly = Math.round(rate * hours * 4.33);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--parchment)',
        padding: '56px 40px 48px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-eyebrow",
      style: {
        marginBottom: 14
      }
    }, "Visa & rules \xB7 Germany"), /*#__PURE__*/React.createElement("h1", {
      style: {
        font: '300 48px/1.12 var(--font-serif)',
        color: 'var(--text-strong)',
        marginBottom: 18,
        maxWidth: '24ch'
      }
    }, "What German student rules let you bill"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-lg)',
        lineHeight: 1.6,
        color: 'var(--text-muted)',
        maxWidth: '62ch',
        marginBottom: 20
      }
    }, "Every brief on Kontrak is checked against the residence-permit limits in \xA716b of the Aufenthaltsgesetz and the statutory minimum wage under the Mindestlohngesetz. These are the numbers we enforce."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "navy"
    }, "Non-EU \xB7 \xA716b residence permit"), /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Reviewed 28 Aug 2026")))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '40px',
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(StatTile, {
      label: "Statutory minimum wage",
      value: "\u20AC13.90",
      delta: "per hour, since 01.01.2026"
    }), /*#__PURE__*/React.createElement(StatTile, {
      label: "Annual work allowance",
      value: "140",
      delta: "full days, or 280 half days"
    }), /*#__PURE__*/React.createElement(StatTile, {
      label: "Lecture-period cap",
      value: "20 h",
      delta: "per week across all employers"
    }), /*#__PURE__*/React.createElement(StatTile, {
      tone: "navy",
      label: "Minijob ceiling",
      value: "\u20AC603",
      delta: "per month \xB7 \u2248 43.4 h"
    }))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 40px 48px',
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.25fr 1fr',
        gap: 20,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 14
      }
    }, "The day account \xB7 \xA716b(3) AufenthG"), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: '300 28px/1.25 var(--font-serif)',
        color: 'var(--text-strong)',
        marginBottom: 16
      }
    }, "140 full days, 280 half days, one calendar year"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-md)',
        lineHeight: 1.7,
        color: 'var(--text-body)',
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("p", null, "Since 1 March 2024 the allowance is 140 full working days or 280 half working days per calendar year, raised from 120 / 240. A day of more than four hours is a full day; four hours or fewer is a half day. One full day equals two half days, and the two buckets can be mixed."), /*#__PURE__*/React.createElement("p", null, "The account resets on 1 January and runs to 31 December \u2014 not with your academic year. If you arrive in September, you still get the whole 140 days for that year.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16,
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 10
      }
    }, "Counts against the cap"), ['Paid briefs through Kontrak', 'Werkstudent and Minijob days', 'Days worked for any other employer'].map(t => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 9,
        alignItems: 'flex-start',
        padding: '6px 0',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-base)',
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "dot",
      size: 16,
      color: "var(--navy-500)"
    }), t))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 10
      }
    }, "Exempt"), ['HiWi work at your university', 'Mandatory curriculum internships', 'Sick days and paid holiday'].map(t => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 9,
        alignItems: 'flex-start',
        padding: '6px 0',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-base)',
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 16,
      color: "var(--success)"
    }), t))))), /*#__PURE__*/React.createElement(Card, {
      tone: "navy"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-micro-plus)',
        letterSpacing: 'var(--ls-label-xs)',
        textTransform: 'uppercase',
        color: 'var(--text-on-navy-muted)'
      }
    }, "Your day account \xB7 2026"), /*#__PURE__*/React.createElement(Badge, {
      tone: "gold"
    }, "Example")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--fs-5xl)',
        color: '#fff',
        lineHeight: 1
      }
    }, "86", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-xl)',
        color: 'var(--text-on-navy-muted)'
      }
    }, " / 140")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-on-navy-muted)',
        margin: '8px 0 16px'
      }
    }, "full days used \xB7 54 remaining"), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        borderRadius: 3,
        background: 'rgba(255,255,255,0.12)',
        overflow: 'hidden',
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '61%',
        height: '100%',
        background: 'var(--gold-500)'
      }
    })), LOG.map(l => /*#__PURE__*/React.createElement("div", {
      key: l.name,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 12,
        padding: '11px 0',
        borderTop: '1px solid var(--border-inverse)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'rgba(255,255,255,0.72)'
      }
    }, l.name), /*#__PURE__*/React.createElement("span", {
      style: {
        color: l.exempt ? 'var(--gold-400)' : '#fff',
        whiteSpace: 'nowrap'
      }
    }, l.days))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 40px 48px',
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-eyebrow",
      style: {
        marginBottom: 14
      }
    }, "Work models"), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: '300 34px/1.2 var(--font-serif)',
        color: 'var(--text-strong)',
        marginBottom: 24
      }
    }, "Three ways students bill on Kontrak"), /*#__PURE__*/React.createElement(Card, {
      padding: "none",
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1.1fr 1.1fr 1.4fr 1.4fr',
        background: 'var(--parchment)'
      }
    }, ['Model', 'Hours', 'Ceiling', 'Social security', 'What Kontrak does'].map(h => /*#__PURE__*/React.createElement("div", {
      key: h,
      style: {
        padding: '14px 20px',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-micro-plus)',
        letterSpacing: 'var(--ls-label-xs)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, h))), MODELS.map(m => /*#__PURE__*/React.createElement("div", {
      key: m.name,
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1.1fr 1.1fr 1.4fr 1.4fr',
        borderTop: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '18px 20px',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 'var(--fs-base)',
        color: 'var(--text-strong)'
      }
    }, m.name), [m.hours, m.ceiling, m.tax, m.kontrak].map((v, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: '18px 20px',
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-base)',
        lineHeight: 1.55,
        color: i === 3 ? 'var(--text-body)' : 'var(--text-muted)'
      }
    }, v)))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 40px 48px',
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1.15fr',
        gap: 20,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 14
      }
    }, "Minimum wage \xB7 MiLoG"), /*#__PURE__*/React.createElement("h3", {
      style: {
        font: '300 26px/1.25 var(--font-serif)',
        color: 'var(--text-strong)',
        marginBottom: 18
      }
    }, "The floor applies to you too"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-base)',
        lineHeight: 1.65,
        color: 'var(--text-muted)',
        marginBottom: 20
      }
    }, "The statutory minimum wage applies regardless of nationality. Kontrak blocks any brief whose fee divided by its scoped hours falls below the floor in force."), WAGE.map(w => /*#__PURE__*/React.createElement("div", {
      key: w.year,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '12px 0',
        borderTop: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-faint)',
        width: 44
      }
    }, w.year), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--fs-xl)',
        color: w.now ? 'var(--gold-700)' : 'var(--text-strong)',
        width: 86
      }
    }, w.rate), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-muted)',
        flex: 1
      }
    }, w.note), w.now && /*#__PURE__*/React.createElement(Badge, {
      tone: "gold"
    }, "In force")))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-label"
    }, "Earnings estimator"), /*#__PURE__*/React.createElement(Tabs, {
      variant: "segmented",
      value: model,
      onChange: setModel,
      items: ['Minijob', 'Werkstudent']
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 20,
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 10
      }
    }, "Your rate \xB7 \u20AC", rate, " / h"), /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: "13.9",
      max: "60",
      step: "1",
      value: rate,
      onChange: e => setRate(Number(e.target.value)),
      style: {
        width: '100%',
        accentColor: 'var(--gold-600)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-xs)',
        color: 'var(--text-faint)',
        marginTop: 6
      }
    }, "Floor \u20AC13.90 \xB7 median on Kontrak \u20AC32")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 10
      }
    }, "Hours per week \xB7 ", hours, " h"), /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: "2",
      max: "20",
      step: "1",
      value: hours,
      onChange: e => setHours(Number(e.target.value)),
      style: {
        width: '100%',
        accentColor: 'var(--gold-600)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-xs)',
        color: 'var(--text-faint)',
        marginTop: 6
      }
    }, "Lecture-period cap 20 h"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 20,
        padding: '20px 0',
        borderTop: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 6
      }
    }, "Gross per month"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--fs-4xl)',
        color: 'var(--text-strong)',
        lineHeight: 1
      }
    }, "\u20AC", monthly.toLocaleString('en-GB'))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 6
      }
    }, "Days billed / year"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--fs-2xl)',
        color: 'var(--text-strong)'
      }
    }, "\u2248 ", Math.min(140, Math.round(hours / 4 * 52)), " half days"))), model === 'Minijob' && monthly > 603 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        padding: '14px 16px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--warning-soft)',
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "triangle-alert",
      size: 17,
      color: "var(--warning)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        lineHeight: 1.55,
        color: 'var(--text-body)'
      }
    }, "Over the \u20AC603 Minijob ceiling. At this rate the engagement becomes a Midijob and full social contributions apply.")), model === 'Werkstudent' && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        padding: '14px 16px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-accent-soft)',
        border: '1px solid var(--gold-200)',
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "info",
      size: 17,
      color: "var(--gold-700)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        lineHeight: 1.55,
        color: 'var(--text-body)'
      }
    }, "Werkstudent status exempts you from health, care and unemployment contributions. Pension insurance of 9.3% still applies.")))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 40px 48px',
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      tone: "outline",
      style: {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        gap: 24,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield-alert",
      size: 26,
      color: "var(--danger)"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 'var(--fs-md)',
        color: 'var(--text-strong)',
        marginBottom: 8
      }
    }, "Freelance and self-employed work needs separate permission"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-base)',
        lineHeight: 1.6,
        color: 'var(--text-muted)',
        maxWidth: '80ch'
      }
    }, "A \xA716b permit covers employment, not self-employment. Freelancing generally requires approval from your Ausl\xE4nderbeh\xF6rde, and the wording on your permit is what governs. Kontrak asks for your permit wording during verification and routes engagements accordingly \u2014 but the decision sits with your authority, not with us.")), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => go('signup')
    }, "Check my permit"))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 40px 64px',
        maxWidth: 'var(--maxw-content)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      tone: "sunken"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 20
      }
    }, "How a year usually runs"), /*#__PURE__*/React.createElement(Stepper, {
      steps: ['Lecture period · 20 h/week', 'Semester break · full-time allowed', 'Lecture period · back to 20 h', '1 January · account resets'],
      current: 1
    }))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 40px 88px',
        maxWidth: 'var(--maxw-narrow)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-label",
      style: {
        marginBottom: 16
      }
    }, "Sources"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--fs-sm)',
        lineHeight: 1.8,
        color: 'var(--text-muted)',
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", null, "\xA716b(3) Aufenthaltsgesetz \u2014 140 full / 280 half working days per calendar year, in force since 1 March 2024."), /*#__PURE__*/React.createElement("span", null, "Fifth Minimum Wage Adjustment Ordinance (MiLoV5) \u2014 \u20AC13.90 per hour from 1 January 2026, \u20AC14.60 from 1 January 2027."), /*#__PURE__*/React.createElement("span", null, "Geringf\xFCgigkeitsgrenze \u2014 \u20AC603 per month (\u20AC7,236 per year) in 2026, indexed to the minimum wage."), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-faint)',
        marginTop: 10
      }
    }, "This page is general information, not legal advice. Your residence permit, your Ausl\xE4nderbeh\xF6rde and your university international office govern your individual case."))));
  }
  Object.assign(window, {
    VisaRules
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/VisaRules.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.LUCIDE_VERSION = __ds_scope.LUCIDE_VERSION;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.GigCard = __ds_scope.GigCard;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
