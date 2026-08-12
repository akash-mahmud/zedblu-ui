import Link from "next/link";

type Props = {
  page: number;
  pageCount: number;
  basePath?: string;
};

export default function BlogPagination({
  page,
  pageCount,
  basePath = "/blog",
}: Props) {
  if (pageCount <= 1) return null;

  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  const prev = Math.max(1, page - 1);
  const next = Math.min(pageCount, page + 1);

  const hrefFor = (target: number) =>
    target <= 1 ? basePath : `${basePath}?page=${target}`;

  return (
    <div className="row">
      <div className="col-lg-12 mt-15 mb-30">
        <div className="page-navigation">
          <ul className="pagination">
            <li className={`page-item${page <= 1 ? " disabled" : ""}`}>
              {page <= 1 ? (
                <span className="page-link" aria-disabled="true">
                  <i className="bi bi-arrow-left-short" />
                </span>
              ) : (
                <Link className="page-link" href={hrefFor(prev)} aria-label="Previous page">
                  <i className="bi bi-arrow-left-short" />
                </Link>
              )}
            </li>
            {pages.map((p) => (
              <li
                key={p}
                className={`page-item${p === page ? " active" : ""}`}
              >
                <Link
                  className="page-link"
                  href={hrefFor(p)}
                  aria-current={p === page ? "page" : undefined}
                >
                  {p}
                </Link>
              </li>
            ))}
            <li className={`page-item${page >= pageCount ? " disabled" : ""}`}>
              {page >= pageCount ? (
                <span className="page-link" aria-disabled="true">
                  <i className="bi bi-arrow-right-short" />
                </span>
              ) : (
                <Link className="page-link" href={hrefFor(next)} aria-label="Next page">
                  <i className="bi bi-arrow-right-short" />
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
