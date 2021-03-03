#!/usr/bin/env bash

ci_dir="$(dirname "$0")"
. "${ci_dir}/ci-common.sh"

git_download rewriter

export COQEXTRAFLAGS='-native-compiler no'
( cd "${CI_BUILD_DIR}/rewriter" && make && make install)
