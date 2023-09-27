import { ErrorCard } from "~/islands/modules/cards/error-card";
import { Shell } from "~/islands/wrappers/shell-variants";

export default function ProductNotFound() {
  return (
    <Shell variant="centered" className="max-w-md">
      <ErrorCard
        title="Store not found"
        description="The Store may have been deleted"
        retryLink="/"
        retryLinkText="Go to Home"
      />
    </Shell>
  );
}
