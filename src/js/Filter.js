import PropTypes from 'prop-types';
import classNames from 'classnames';
import React from 'react';

import languageShape from './shapes/languageShape';

class Filter extends React.PureComponent {
    static propTypes = {
        controlKey: PropTypes.string.isRequired,
        disabled: PropTypes.bool.isRequired,
        filterPlaceholder: PropTypes.string.isRequired,
        filterValue: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        lang: languageShape.isRequired,
        onFilterChange: PropTypes.func.isRequired,
    };

    render() {
        const {
            controlKey,
            disabled,
            filterPlaceholder,
            filterValue,
            id,
            lang,
            onFilterChange,
        } = this.props;

        return (
            <div className="rdl-filter-container">
                <label
                    className="rdl-control-label rdl-sr-only"
                    htmlFor={`${id}-filter-${controlKey}`}
                >
                    {lang[`${controlKey}FilterHeader`]}
                </label>
                <input
                    className="rdl-filter"
                    data-key={controlKey}
                    disabled={disabled}
                    id={`${id}-filter-${controlKey}`}
                    placeholder={filterPlaceholder}
                    type="text"
                    value={filterValue}
                    onChange={onFilterChange}
                />

                <span
                    className={classNames(
                        'absolute inset-y-0 flex w-10 justify-center',
                        filterValue ? 'right-2' : 'right-0',
                    )}
                >
                    <span className="flex h-full items-center justify-center">
                        {filterValue ? (
                            <button
                                className="inline-flex items-center relative font-medium leading-none rounded-md outline-none transition-all duration-150 ease-in-out focus:ring-2 justify-center ml-2 w-7 h-7 focus:ring-blue-500 hover:bg-blue-100 hover:text-gray-800"
                                type="button"
                                onClick={onFilterChange}
                            >
                                <i className="fal fa-times text-lg" />
                            </button>
                        ) : (
                            <svg
                                height="24px"
                                version="1.1"
                                viewBox="0 0 24 24"
                                width="24px"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g
                                    fill="none"
                                    fillRule="evenodd"
                                    stroke="none"
                                    strokeWidth="1"
                                >
                                    <rect
                                        height="24"
                                        id="bound"
                                        width="24"
                                        x="0"
                                        y="0"
                                    />
                                    <path
                                        className="fill-current text-blue-500"
                                        d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                                        fillRule="nonzero"
                                        id="Path-2"
                                        opacity="0.3"
                                    />
                                    <path
                                        className="fill-current text-blue-500"
                                        d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                                        fillRule="nonzero"
                                        id="Path"
                                    />
                                </g>
                            </svg>
                        )}
                    </span>
                </span>
            </div>
        );
    }
}

export default Filter;
