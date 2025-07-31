import {
  Button,
  Hamburger,
  NavDivider,
  NavDrawer,
  NavDrawerBody,
  NavDrawerHeader,
  NavItem,
  Title3,
  makeStyles,
  mergeClasses,
} from '@fluentui/react-components';
import {
  CloudWords28Filled,
  Dismiss20Regular,
  Flash20Filled,
  Flash20Regular,
  FluentIconsProps,
  Info20Filled,
  Info20Regular,
  Open20Filled,
  Open20Regular,
  bundleIcon,
} from '@fluentui/react-icons';
import { Link, useLocation } from 'react-router';
import React from 'react';

interface NavigationItem {
  id: number;
  label: string;
  path: string;
  icon: React.ComponentType;
  iconFilled: React.ComponentType;
  iconRegular: React.ComponentType;
  external?: boolean;
  newTab?: boolean;
  drawerSection: number;
}

// Button icons
const Flash = bundleIcon(Flash20Filled, Flash20Regular);
const Info = bundleIcon(Info20Filled, Info20Regular);
const Open = bundleIcon(Open20Filled, Open20Regular);

const navigationItems: NavigationItem[] = [
  {
    id: 0,
    label: 'Generate Names',
    path: '/',
    icon: Flash,
    iconFilled: Flash20Filled,
    iconRegular: Flash20Regular,
    drawerSection: 1,
  },
  {
    id: 1,
    label: 'About',
    path: '/about',
    icon: Info,
    iconFilled: Info20Filled,
    iconRegular: Info20Regular,
    drawerSection: 1,
  },
  {
    id: 2,
    label: 'GitHub',
    path: 'https://github.com/bijancamp/azure-name-builder',
    icon: Open,
    iconFilled: Open20Filled,
    iconRegular: Open20Regular,
    external: true,
    newTab: true,
    drawerSection: 2,
  },
];

const useStyles = makeStyles({
  header: {
    alignItems: 'center',
    backgroundColor: '#003cac',
    borderBottom: '1px solid #e1e1e1',
    display: 'flex',
    height: '64px',
    justifyContent: 'space-between',
    padding: '0 24px',
    '@media (min-width: 480px) and (max-width: 720px)': {
      padding: '0 18px',
    },
    '@media (max-width: 480px)': {
      padding: '0 11px',
    },
  },
  branding: {
    alignItems: 'center',
    color: '#ffffff',
    display: 'flex',
    gap: '12px',
    // Push everything down 1px on Safari for better alignment
    '@supports (-webkit-touch-callout: none)': {
      transform: 'translateY(1px)',
    },
  },
  // Shows on large screens
  brandingIcon: {
    display: 'flex',
    alignItems: 'center',
    // Adjust for non-Safari browsers (Chrome, Edge, Firefox)
    transform: 'translateY(2px)',
    // Reset for Safari since it already aligns well
    '@supports (-webkit-touch-callout: none)': {
      transform: 'none',
    },
    '@media (max-width: 720px)': {
      display: 'none',
    },
  },
  // Shows on smaller screens
  hamburger: {
    display: 'none',
    alignItems: 'center',
    // Adjust for non-Safari browsers (Chrome, Edge, Firefox)
    transform: 'translateY(2px)',
    // Reset for Safari since it already aligns well
    '@supports (-webkit-touch-callout: none)': {
      transform: 'none',
    },
    '@media (max-width: 720px)': {
      display: 'flex',
    },
  },
  hamburgerIcon: {
    color: '#ffffff',
    ':hover': {
      backgroundColor: '#3766c0',
      color: '#ffffff',
    },
    ':hover:active': {
      backgroundColor: '#4f7ac9',
      color: '#ffffff',
    },
  },
  navigation: {
    alignItems: 'center',
    display: 'flex',
    gap: '8px',
    '@media (max-width: 480px)': {
      display: 'none',
    },
  },
  navigationLink: {
    textDecoration: 'none',
  },
  navigationButton: {
    alignItems: 'center',
    color: '#ffffff',
    display: 'flex',
    gap: '8px',
    ':hover': {
      backgroundColor: '#3766c0',
      color: '#ffffff',
    },
    ':hover:active': {
      backgroundColor: '#4f7ac9',
      color: '#ffffff',
    },
  },
  activeDesktopNavigationButton: {
    backgroundColor: '#f3f2f1',
    color: '#003cac',
    fontWeight: '600',
    ':hover': {
      backgroundColor: '#f3f2f1',
      color: '#003cac',
    },
  },
  activeMobileNavigationButton: {
    fontWeight: '600',
  },
  mobileNavigationButtonBackground: {
    backgroundColor: '#fafcfc',
    ':hover': {
      backgroundColor: '#fafcfc',
    },
  },
  // Successive hiding of navigation items
  navItemGitHub: {
    '@media (max-width: 720px)': {
      display: 'none',
    },
  },
  navItemAbout: {
    '@media (max-width: 614px)': {
      display: 'none',
    },
  },
  navItemGenerate: {
    '@media (max-width: 516px)': {
      display: 'none',
    },
  },
  brandingTitleLink: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',
  },
  brandingTitle: {
    margin: 0,
    lineHeight: '1',
    // Use vertical-align for better cross-browser text alignment
    verticalAlign: 'middle',
  },
  drawerBackground: {
    backgroundColor: '#fafcfc',
  },
  drawerHeader: {
    alignItems: 'center !important',
    display: 'flex !important',
    flexDirection: 'row',
    justifyContent: 'space-between !important',
    padding: '16px 24px !important',
    width: '100% !important',
  },
  brandingLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
});

const activeMobileNavigationButtonIconStyleProps: FluentIconsProps = {
  primaryFill: '#003cac',
};

/**
 * Header component with responsive navigation.
 * Navigation items disappear one by one as screen width decreases:
 * - Large: Generate Names, About, GitHub
 * - Medium: Generate Names, About (GitHub hidden)
 * - Smaller: Generate Names (About hidden)
 * - Smallest: No nav items (Generate Names hidden)
 *
 * Hamburger icon appears as navigation items begin to disappear.
 * Drawer always shows all items regardless of header visibility.
 */
function Header() {
  const styles = useStyles();
  const location = useLocation();
  const [isDrawer, setIsDrawerOpen] = React.useState(false);

  const handleHamburgerOpenClick = () => {
    setIsDrawerOpen(() => !isDrawer);
  };

  const handleHamburgerCloseClick = () => {
    setIsDrawerOpen(false);
  };

  const isActiveRoute = (itemPath: string) => {
    return location.pathname === itemPath;
  };

  const getNavItemClass = (itemLabel: string) => {
    switch (itemLabel) {
      case 'Generate Names':
        return styles.navItemGenerate;
      case 'About':
        return styles.navItemAbout;
      case 'GitHub':
        return styles.navItemGitHub;
      default:
        return '';
    }
  };

  const renderNavigationItems = () => {
    return navigationItems.map((item) => {
      const isActive = !item.external && isActiveRoute(item.path);
      const navItemClass = getNavItemClass(item.label);

      // Use filled icon for active desktop navigation, regular for inactive
      const DesktopIconComponent =
        isActive ? item.iconFilled : item.iconRegular;

      if (item.external) {
        return (
          <Button
            key={item.label}
            appearance="subtle"
            as="a"
            href={item.path}
            target={item.newTab ? '_blank' : undefined}
            rel={item.newTab ? 'noopener noreferrer' : undefined}
            className={mergeClasses(styles.navigationButton, navItemClass)}
          >
            <DesktopIconComponent />
            {item.label}
          </Button>
        );
      }

      return (
        <Link key={item.label} to={item.path} className={styles.navigationLink}>
          <Button
            appearance="subtle"
            className={mergeClasses(
              styles.navigationButton,
              isActive && styles.activeDesktopNavigationButton,
              navItemClass,
            )}
          >
            {/* Prevent brief flash of filled white icon */}
            <span
              style={{
                color: isActive ? '#003cac' : undefined,
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              <DesktopIconComponent />
            </span>
            {item.label}
          </Button>
        </Link>
      );
    });
  };

  /**
   * Gets the selected value for the navigation drawer based on the current
   * route.
   * @returns {string | undefined} The ID of the active navigation item.
   */
  const getCurrentSelectedValue = () => {
    const currentItem = navigationItems.find(
      (item) => !item.external && isActiveRoute(item.path),
    );

    return currentItem ? currentItem.id + '' : '';
  };

  const renderMobileNavigationItems = () => {
    // Stable sort navigationItems by drawerSection
    const sortedItems = [...navigationItems].sort(
      (a, b) => a.drawerSection - b.drawerSection,
    );

    const elements: React.ReactNode[] = [];
    let lastSection: number | null = null;

    sortedItems.forEach((item) => {
      const IconComponent = item.icon;
      const isActive = !item.external && isActiveRoute(item.path);

      // Insert divider if this item's section is different from the last
      if (lastSection !== null && item.drawerSection !== lastSection) {
        elements.push(
          <NavDivider key={`divider-before-section-${item.drawerSection}`} />,
        );
      }

      const navItem =
        item.external ?
          <NavItem
            key={item.label}
            as="a"
            href={item.path}
            value={item.id + ''}
            target={item.newTab ? '_blank' : undefined}
            rel={item.newTab ? 'noopener noreferrer' : undefined}
            onClick={handleHamburgerCloseClick}
            icon={<IconComponent />}
            style={{ backgroundColor: '#fafcfc' }}
          >
            {item.label}
          </NavItem>
        : <Link
            key={item.label}
            to={item.path}
            className={styles.navigationLink}
          >
            <NavItem
              value={item.id + ''}
              onClick={handleHamburgerCloseClick}
              className={mergeClasses(
                isActive ? styles.activeMobileNavigationButton : undefined,
                styles.mobileNavigationButtonBackground,
              )}
              icon={
                <IconComponent
                  {...(isActive ?
                    activeMobileNavigationButtonIconStyleProps
                  : {})}
                />
              }
            >
              {item.label}
            </NavItem>
          </Link>;

      elements.push(navItem);
      lastSection = item.drawerSection;
    });

    return elements;
  };

  return (
    <>
      <header className={styles.header}>
        {/* Branding - logo transforms to hamburger when nav items hide */}
        <div className={styles.branding}>
          {/* Logo - shown on large screens */}
          <Link
            to="/"
            className={mergeClasses(styles.brandingLink, styles.brandingIcon)}
          >
            <CloudWords28Filled />
          </Link>

          {/* Hamburger - replaces logo when nav items start hiding */}
          <Hamburger
            onClick={handleHamburgerOpenClick}
            className={mergeClasses(styles.hamburgerIcon, styles.hamburger)}
          />

          <Link to="/" className={styles.brandingTitleLink}>
            <Title3 className={styles.brandingTitle}>Azure Name Builder</Title3>
          </Link>
        </div>

        {/* Desktop Navigation Items */}
        <nav className={styles.navigation}>{renderNavigationItems()}</nav>
      </header>

      {/* Mobile Navigation Drawer */}
      <NavDrawer
        open={isDrawer}
        onOpenChange={(_, { open }) => setIsDrawerOpen(open)}
        selectedValue={getCurrentSelectedValue()}
        className={styles.drawerBackground}
      >
        <NavDrawerHeader className={styles.drawerHeader}>
          <Link
            to="/"
            className={styles.brandingLink}
            onClick={handleHamburgerCloseClick}
            style={{ transform: 'translateY(3px)' }}
          >
            <CloudWords28Filled />
          </Link>
          <Button
            appearance="subtle"
            icon={<Dismiss20Regular />}
            onClick={handleHamburgerCloseClick}
          />
        </NavDrawerHeader>

        {/* Mobile Navigation Items */}
        <NavDrawerBody>{renderMobileNavigationItems()}</NavDrawerBody>
      </NavDrawer>
    </>
  );
}

export default Header;
