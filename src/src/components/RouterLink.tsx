import { Link, LinkProps } from 'react-router';
import { makeStyles, tokens } from '@fluentui/react-components';

const useStyles = makeStyles({
  brandLink: {
    color: tokens.colorBrandForegroundLink,
    textDecoration: 'none',
    ':hover': {
      color: tokens.colorBrandForegroundLinkHover,
    },
    ':active': {
      color: tokens.colorBrandForegroundLinkPressed,
    },
    ':focus': {
      color: tokens.colorBrandForegroundLinkSelected,
    },
  },
});

interface RouterLinkProps extends LinkProps {
  children: React.ReactNode;
}

/**
 * Wrapper of React Router's {@link Link} component that uses the current Fluent
 * theme.
 */
function RouterLink({ children, className, ...props }: RouterLinkProps) {
  const styles = useStyles();

  const combinedClassName =
    className ? `${styles.brandLink} ${className}` : styles.brandLink;

  return (
    <Link className={combinedClassName} {...props}>
      {children}
    </Link>
  );
}

export default RouterLink;
