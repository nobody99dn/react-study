const { Suspense } = React;

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
        </section>
      </Suspense>
    </div>
  );
}

export default MyComponent;
