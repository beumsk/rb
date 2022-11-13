import PropTypes from 'prop-types';

export default function Codesandbox({ className, sandbox, title }) {
  return (
    <>
      <div className={'code-iframe-wrapper ' + (className || '')}>
        <iframe
          height="300"
          title={title}
          view="preview"
          loading="lazy"
          src={'https://codesandbox.io/embed/' + sandbox + '?fontsize=14&theme=dark'}
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        >
          <a href={'https://codesandbox.io/s/' + sandbox} target="_blank" rel="noopener noreferrer">
            See the Sandbox by Rémy Beumier
          </a>
        </iframe>
      </div>
    </>
  );
}

Codesandbox.propTypes = {
  className: PropTypes.string,
  sandbox: PropTypes.string,
  title: PropTypes.string,
};
